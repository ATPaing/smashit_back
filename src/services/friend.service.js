import prisma from "../config/prisma.js";

const userSelect = {
    id: true,
    name: true,
    email: true,
    reliabilityScore: true,
};

const normalizeFriendshipIds = (userId1, userId2) => {
    return userId1 < userId2
        ? { userAId: userId1, userBId: userId2 }
        : { userAId: userId2, userBId: userId1 };
};

const createNotification = async ({
    recipientId,
    senderId,
    type,
    title,
    message,
}) => {
    return prisma.notification.create({
        data: {
            recipientId,
            senderId,
            type,
            title,
            message,
            updatedAt: new Date(),
        },
    });
};

const friendshipExists = async (userId1, userId2) => {
    const { userAId, userBId } = normalizeFriendshipIds(userId1, userId2);

    return prisma.friendship.findUnique({
        where: {
            userAId_userBId: {
                userAId,
                userBId,
            },
        },
    });
};

const getRelationshipStatus = async (currentUserId, otherUserId) => {
    if (await friendshipExists(currentUserId, otherUserId)) {
        return "FRIENDS";
    }

    const sentRequest = await prisma.friend_request.findUnique({
        where: {
            requesterId_recipientId: {
                requesterId: currentUserId,
                recipientId: otherUserId,
            },
        },
    });

    if (sentRequest?.status === "PENDING") {
        return "PENDING_SENT";
    }

    const receivedRequest = await prisma.friend_request.findUnique({
        where: {
            requesterId_recipientId: {
                requesterId: otherUserId,
                recipientId: currentUserId,
            },
        },
    });

    if (receivedRequest?.status === "PENDING") {
        return "PENDING_RECEIVED";
    }

    return "NONE";
};

export const searchUsers = async (userId, query) => {
    const users = await prisma.user.findMany({
        where: {
            id: { not: userId },
            OR: [
                { name: { contains: query } },
                { email: { contains: query } },
            ],
        },
        select: userSelect,
        take: 20,
    });

    const usersWithStatus = await Promise.all(
        users.map(async (user) => ({
            ...user,
            relationshipStatus: await getRelationshipStatus(userId, user.id),
        })),
    );

    return usersWithStatus;
};

export const sendFriendRequest = async (requesterId, recipientId) => {
    if (requesterId === recipientId) {
        throw new Error("You cannot send a friend request to yourself");
    }

    const recipient = await prisma.user.findUnique({
        where: { id: recipientId },
        select: { id: true, name: true },
    });

    if (!recipient) {
        throw new Error("User not found");
    }

    if (await friendshipExists(requesterId, recipientId)) {
        throw new Error("You are already friends with this user");
    }

    const reversePending = await prisma.friend_request.findFirst({
        where: {
            requesterId: recipientId,
            recipientId: requesterId,
            status: "PENDING",
        },
    });

    if (reversePending) {
        throw new Error(
            "This user already sent you a friend request. Accept or decline it instead",
        );
    }

    const existingRequest = await prisma.friend_request.findUnique({
        where: {
            requesterId_recipientId: {
                requesterId,
                recipientId,
            },
        },
    });

    if (existingRequest?.status === "PENDING") {
        throw new Error("Friend request already sent");
    }

    if (
        existingRequest?.status === "ACCEPTED" &&
        (await friendshipExists(requesterId, recipientId))
    ) {
        throw new Error("You are already friends with this user");
    }

    const requester = await prisma.user.findUnique({
        where: { id: requesterId },
        select: { name: true },
    });

    let request;

    if (
        existingRequest?.status === "DECLINED" ||
        existingRequest?.status === "ACCEPTED"
    ) {
        request = await prisma.friend_request.update({
            where: { id: existingRequest.id },
            data: { status: "PENDING" },
        });
    } else {
        request = await prisma.friend_request.create({
            data: {
                requesterId,
                recipientId,
            },
        });
    }

    const notification = await createNotification({
        recipientId,
        senderId: requesterId,
        type: "FRIEND_REQUEST",
        title: "New friend request",
        message: `${requester.name} sent you a friend request`,
    });

    return { request, notification, recipientName: recipient.name };
};

export const acceptFriendRequest = async (userId, requestId) => {
    const request = await prisma.friend_request.findUnique({
        where: { id: Number(requestId) },
        include: {
            requester: { select: { id: true, name: true } },
            recipient: { select: { id: true, name: true } },
        },
    });

    if (!request) {
        throw new Error("Friend request not found");
    }

    if (request.recipientId !== userId) {
        throw new Error("You are not allowed to accept this friend request");
    }

    if (request.status !== "PENDING") {
        throw new Error("Friend request is no longer pending");
    }

    if (await friendshipExists(request.requesterId, request.recipientId)) {
        throw new Error("You are already friends with this user");
    }

    const { userAId, userBId } = normalizeFriendshipIds(
        request.requesterId,
        request.recipientId,
    );

    await prisma.$transaction([
        prisma.friendship.create({
            data: { userAId, userBId },
        }),
        prisma.friend_request.update({
            where: { id: request.id },
            data: { status: "ACCEPTED" },
        }),
        prisma.friend_request.updateMany({
            where: {
                requesterId: request.recipientId,
                recipientId: request.requesterId,
                status: "PENDING",
            },
            data: { status: "DECLINED" },
        }),
    ]);

    const notification = await createNotification({
        recipientId: request.requesterId,
        senderId: userId,
        type: "FRIEND_REQUEST_ACCEPTED",
        title: "Friend request accepted",
        message: `${request.recipient.name} accepted your friend request`,
    });

    return {
        friend: {
            id: request.requester.id,
            name: request.requester.name,
        },
        notification,
    };
};

export const declineFriendRequest = async (userId, requestId) => {
    const request = await prisma.friend_request.findUnique({
        where: { id: Number(requestId) },
        include: {
            requester: { select: { id: true, name: true } },
            recipient: { select: { id: true, name: true } },
        },
    });

    if (!request) {
        throw new Error("Friend request not found");
    }

    if (request.recipientId !== userId) {
        throw new Error("You are not allowed to decline this friend request");
    }

    if (request.status !== "PENDING") {
        throw new Error("Friend request is no longer pending");
    }

    await prisma.friend_request.update({
        where: { id: request.id },
        data: { status: "DECLINED" },
    });

    const notification = await createNotification({
        recipientId: request.requesterId,
        senderId: userId,
        type: "FRIEND_REQUEST_DECLINED",
        title: "Friend request declined",
        message: `${request.recipient.name} declined your friend request`,
    });

    return { notification };
};

export const listFriends = async (userId) => {
    const friendships = await prisma.friendship.findMany({
        where: {
            OR: [{ userAId: userId }, { userBId: userId }],
        },
        include: {
            userA: { select: userSelect },
            userB: { select: userSelect },
        },
        orderBy: { createdAt: "desc" },
    });

    return friendships.map((friendship) => {
        const friend =
            friendship.userAId === userId
                ? friendship.userB
                : friendship.userA;

        return {
            ...friend,
            friendsSince: friendship.createdAt,
        };
    });
};

export const listIncomingRequests = async (userId) => {
    return prisma.friend_request.findMany({
        where: {
            recipientId: userId,
            status: "PENDING",
        },
        include: {
            requester: { select: userSelect },
        },
        orderBy: { createdAt: "desc" },
    });
};

export const removeFriend = async (userId, friendId) => {
    if (userId === Number(friendId)) {
        throw new Error("You cannot remove yourself as a friend");
    }

    const { userAId, userBId } = normalizeFriendshipIds(
        userId,
        Number(friendId),
    );

    const friendship = await prisma.friendship.findUnique({
        where: {
            userAId_userBId: {
                userAId,
                userBId,
            },
        },
    });

    if (!friendship) {
        throw new Error("Friendship not found");
    }

    await prisma.$transaction([
        prisma.friendship.delete({
            where: { id: friendship.id },
        }),
        prisma.friend_request.updateMany({
            where: {
                OR: [
                    {
                        requesterId: userId,
                        recipientId: Number(friendId),
                        status: "ACCEPTED",
                    },
                    {
                        requesterId: Number(friendId),
                        recipientId: userId,
                        status: "ACCEPTED",
                    },
                ],
            },
            data: { status: "DECLINED" },
        }),
    ]);

    return { friendId: Number(friendId) };
};
