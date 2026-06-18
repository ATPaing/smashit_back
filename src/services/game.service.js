import prisma from "../config/prisma.js";
import {getGameStatus} from "../utils/getGameStatus.js";

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

    return cancelledGame;
};