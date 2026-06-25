import prisma from "../config/prisma.js";
import {getGameStatus} from "../utils/getGameStatus.js";

const normalizeFriendshipIds = (userId1, userId2) => {
    return userId1 < userId2
        ? { userAId: userId1, userBId: userId2 }
        : { userAId: userId2, userBId: userId1 };
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

export const createGame = async ({
    name,
    location,
    startTime,
    endTime,
    feeType,
    minReliabilityScore,
    hostId,
}) => {
    const game = await prisma.game.create({
        data: {
            name,
            location,
            startTime: new Date(startTime),
            endTime: new Date(endTime),
            feeType,
            minReliabilityScore,
            hostId,
        },
    });
    return game;
}; 

export const getNextUpcomingGame = async (userId) => {
    const game = await prisma.game.findFirst({
        where: {
            startTime: {
                gte: new Date(),
            },
            isCancelled: false,
            OR: [
                { hostId: userId },
                {
                    invitation: {
                        some: {
                            userId,
                        },
                    },
                },
            ],
        },
        orderBy: {
            startTime: "asc",
        },
        include: {
            host: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            },
        },
    });

    return game;
};

export const getAllGames = async (userId) => {
    console.log(userId);
    const games = await prisma.game.findMany({
        where: {
            OR: [
                { hostId: userId },
                {
                    invitation: {
                        some: {
                            userId,
                        },
                    },
                },
            ],
        },
        orderBy: {
            startTime: "asc",
        },
        include: {
            host: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            },
            invitation: {
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            reliabilityScore: true,
                        },
                    },
                },
            },
        },
    });

    return games;
};

export const getGameById = async (gameId, userId) => {
    console.log("Fetching game by ID:", gameId, "for user:", userId);
    const game = await prisma.game.findFirst({
        where: {
            id: Number(gameId),
            OR: [
                { hostId: userId },
                {
                    invitation: {
                        some: {
                            userId,
                        },
                    },
                },
            ],
        },
        include: {
            host: {
                select: {
                    id: true,
                    name: true,
                    reliabilityScore: true,
                },
            },
            invitation: {
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            reliabilityScore: true,
                        },
                    },
                },
            },
        },
    });

    if (!game) {
        return null;
    }

    const players = [
        {
            id: game.host.id,
            name: game.host.name,
            role: "Host",
            rsvpStatus: "accepted",
            attendanceStatus: "",
        },
        ...game.invitation.map((invite) => ({
            id: invite.user.id,
            name: invite.user.name,
            role: "Invitee",
            rsvpStatus: invite.status.toLowerCase(),
            attendanceStatus: invite.attendanceStatus
                ? invite.attendanceStatus.toLowerCase()
                : "",
        })),
    ];

    return {
        id: game.id,
        status: getGameStatus(game),
        title: game.name,
        location: {
            name: game.location,
            court: "",
        },
        isCancelled: game.isCancelled,
        startTime: game.startTime,
        endTime: game.endTime,
        feeType: game.feeType === "FREE" ? "Free" : "Shared Cost",
        minReliability: game.minReliabilityScore,
        host: {
            id: game.host.id,
            name: game.host.name,
            reliability: game.host.reliabilityScore,
        },
        players,
        currentUserRole: game.hostId === userId ? "HOST" : "PLAYER",
    };
};

export const updateGameById = async (gameId, hostId, data) => {
    const game = await prisma.game.findFirst({
        where: {
            id: Number(gameId),
            hostId,
            isCancelled: false,
        },
    });

    if (!game) {
        return null;
    }

    const updateData = {};

    if (data.name !== undefined) {
        updateData.name = data.name;
    }

    if (data.location !== undefined) {
        updateData.location = data.location;
    }

    if (data.feeType !== undefined) {
        const feeType = data.feeType.toUpperCase();

        if (!["FREE", "SPLIT"].includes(feeType)) {
            throw new Error("Invalid fee type");
        }

        updateData.feeType = feeType;
    }

    if (data.minReliabilityScore !== undefined) {
        const score = Number(data.minReliabilityScore);

        if (score < 0 || score > 100) {
            throw new Error("Min reliability score must be between 0 and 100");
        }

        updateData.minReliabilityScore = score;
    }

    if (data.startTime !== undefined) {
        const start = new Date(data.startTime);

        if (isNaN(start.getTime())) {
            throw new Error("Invalid start time");
        }

        if (start < new Date()) {
            throw new Error("Start time cannot be in the past");
        }

        updateData.startTime = start;
    }

    if (data.endTime !== undefined) {
        const end = new Date(data.endTime);

        if (isNaN(end.getTime())) {
            throw new Error("Invalid end time");
        }

        updateData.endTime = end;
    }

    if (Object.keys(updateData).length === 0) {
        throw new Error("No fields provided to update");
    }

    const finalStartTime = updateData.startTime ?? game.startTime;
    const finalEndTime = updateData.endTime ?? game.endTime;

    if (finalEndTime <= finalStartTime) {
        throw new Error("End time must be later than start time");
    }

    const updatedGame = await prisma.game.update({
        where: {
            id: Number(gameId),
        },
        data: updateData,
    });

    return updatedGame;
};

export const cancelGameById = async (gameId, hostId) => {
    const game = await prisma.game.findFirst({
        where: {
            id: Number(gameId),
            hostId,
            isCancelled: false,
        },
        include: {
            host: {
                select: {
                    id: true,
                    name: true,
                },
            },
            invitation: {
                select: {
                    userId: true,
                },
            },
        },
    });

    if (!game) {
        return null;
    }

    const now = new Date();

    if (game.startTime <= now) {
        throw new Error("Only upcoming games can be cancelled");
    }

    const cancelledGame = await prisma.game.update({
        where: {
            id: Number(gameId),
        },
        data: {
            isCancelled: true,
        },
    });

    const notifications = await Promise.all(
        game.invitation.map((invite) =>
            prisma.notification.create({
                data: {
                    recipientId: invite.userId,
                    senderId: hostId,
                    type: "GAME_CANCELLED",
                    title: "Game cancelled",
                    message: `${game.host.name} cancelled ${game.name} at ${game.location}.`,
                    gameId: Number(gameId),
                },
            }),
        ),
    );

    return { cancelledGame, notifications };
};

export const invitePlayerToGame = async (hostId, gameId, inviteeUserId) => {
    if (hostId === inviteeUserId) {
        throw new Error("You cannot invite yourself");
    }

    const game = await prisma.game.findFirst({
        where: {
            id: Number(gameId),
            hostId,
        },
        include: {
            host: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
    });

    if (!game) {
        throw new Error("Game not found or you are not the host");
    }

    if (getGameStatus(game) !== "upcoming") {
        throw new Error("Players can only be invited to upcoming games");
    }

    const invitee = await prisma.user.findUnique({
        where: { id: inviteeUserId },
        select: {
            id: true,
            name: true,
            reliabilityScore: true,
        },
    });

    if (!invitee) {
        throw new Error("User not found");
    }

    if (!(await friendshipExists(hostId, inviteeUserId))) {
        throw new Error("You can only invite friends");
    }

    if (invitee.reliabilityScore < game.minReliabilityScore) {
        throw new Error(
            `This player does not meet the minimum reliability score of ${game.minReliabilityScore}`,
        );
    }

    const existingInvitation = await prisma.invitation.findUnique({
        where: {
            gameId_userId: {
                gameId: Number(gameId),
                userId: inviteeUserId,
            },
        },
    });

    if (existingInvitation) {
        throw new Error("Player already invited");
    }

    const invitation = await prisma.invitation.create({
        data: {
            gameId: Number(gameId),
            userId: inviteeUserId,
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    reliabilityScore: true,
                },
            },
        },
    });

    const notification = await prisma.notification.create({
        data: {
            recipientId: inviteeUserId,
            senderId: hostId,
            type: "INVITATION_RECEIVED",
            title: "Game invitation received",
            message: `${game.host.name} invited you to ${game.name} at ${game.location}.`,
            gameId: Number(gameId),
        },
    });

    return {
        invitation,
        notification,
        player: {
            id: invitee.id,
            name: invitee.name,
            role: "Invitee",
            rsvpStatus: "pending",
            attendanceStatus: "",
        },
    };
};

export const respondToInvitation = async (userId, gameId, status) => {
    const allowedStatuses = ["PENDING", "ACCEPTED", "DECLINED"];

    if (!allowedStatuses.includes(status)) {
        throw new Error("Invalid invitation status");
    }

    const game = await prisma.game.findUnique({
        where: { id: Number(gameId) },
        include: {
            host: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
    });

    if (!game) {
        throw new Error("Game not found");
    }

    if (game.hostId === userId) {
        throw new Error("Hosts cannot respond to invitations");
    }

    if (getGameStatus(game) !== "upcoming") {
        throw new Error("You can only respond to upcoming games");
    }

    const invitation = await prisma.invitation.findUnique({
        where: {
            gameId_userId: {
                gameId: Number(gameId),
                userId,
            },
        },
    });

    if (!invitation) {
        throw new Error("Invitation not found");
    }

    const updatedInvitation = await prisma.invitation.update({
        where: { id: invitation.id },
        data: { status },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    reliabilityScore: true,
                },
            },
        },
    });

    let notification = null;

    if (status === "ACCEPTED" && invitation.status !== "ACCEPTED") {
        notification = await prisma.notification.create({
            data: {
                recipientId: game.hostId,
                senderId: userId,
                type: "MATCH_ACCEPTED",
                title: "Match accepted",
                message: `${updatedInvitation.user.name} accepted your invitation to ${game.name}.`,
                gameId: Number(gameId),
            },
        });
    }

    return { invitation: updatedInvitation, notification };
};

const mapFrontendAttendanceStatus = (status) => {
    const normalized = status?.toLowerCase();

    if (normalized === "present") {
        return "PRESENT";
    }

    if (normalized === "absent" || normalized === "no_show") {
        return "NO_SHOW";
    }

    throw new Error("Invalid attendance status");
};

const calculateReliabilityScore = async (tx, userId) => {
    const records = await tx.invitation.findMany({
        where: {
            userId,
            attendanceStatus: { not: null },
            game: {
                isCancelled: false,
                endTime: { lt: new Date() },
            },
        },
    });

    if (records.length === 0) {
        return 100;
    }

    const presentCount = records.filter(
        (record) => record.attendanceStatus === "PRESENT",
    ).length;

    const score = Math.round((presentCount / records.length) * 100);

    return Math.min(100, Math.max(0, score));
};

export const markGameAttendance = async (hostId, gameId, attendanceList) => {
    if (!Array.isArray(attendanceList) || attendanceList.length === 0) {
        throw new Error("Attendance data is required");
    }

    const game = await prisma.game.findFirst({
        where: {
            id: Number(gameId),
            hostId,
        },
        include: {
            invitation: true,
        },
    });

    if (!game) {
        throw new Error("Game not found or you are not the host");
    }

    if (game.isCancelled) {
        throw new Error("Cannot mark attendance for cancelled games");
    }

    if (getGameStatus(game) !== "completed") {
        throw new Error("Attendance can only be marked for completed games");
    }

    const acceptedInvitees = game.invitation.filter(
        (invite) => invite.status === "ACCEPTED",
    );

    if (acceptedInvitees.length === 0) {
        throw new Error("There are no accepted players to mark attendance for");
    }

    if (attendanceList.length !== acceptedInvitees.length) {
        throw new Error("Please mark attendance for all accepted players");
    }

    const playerIds = new Set();

    for (const entry of attendanceList) {
        if (!entry.playerId || !entry.status) {
            throw new Error("Each attendance entry must include playerId and status");
        }

        const playerId = Number(entry.playerId);

        if (playerIds.has(playerId)) {
            throw new Error("Duplicate player in attendance data");
        }

        playerIds.add(playerId);

        const invitation = acceptedInvitees.find(
            (invite) => invite.userId === playerId,
        );

        if (!invitation) {
            throw new Error("Player not found in this game");
        }

        mapFrontendAttendanceStatus(entry.status);
    }

    const updatedInvitations = await prisma.$transaction(async (tx) => {
        const results = [];

        for (const entry of attendanceList) {
            const updatedInvitation = await tx.invitation.update({
                where: {
                    gameId_userId: {
                        gameId: Number(gameId),
                        userId: Number(entry.playerId),
                    },
                },
                data: {
                    attendanceStatus: mapFrontendAttendanceStatus(entry.status),
                },
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            reliabilityScore: true,
                        },
                    },
                },
            });

            results.push(updatedInvitation);
        }

        for (const playerId of playerIds) {
            const reliabilityScore = await calculateReliabilityScore(tx, playerId);

            await tx.user.update({
                where: { id: playerId },
                data: { reliabilityScore },
            });
        }

        return results;
    });

    return { invitations: updatedInvitations };
};