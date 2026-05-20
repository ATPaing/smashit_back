import prisma from "../config/prisma.js";

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

export const getNextUpcomingGame = async () => {
    const game = await prisma.game.findFirst({
        where: {
            startTime: {
                gte: new Date(),
            },
            status: "SCHEDULED",
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
