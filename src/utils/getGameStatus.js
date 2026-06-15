export const getGameStatus = (game) => {
    const now = new Date();

    if (game.isCancelled) {
        return "cancelled";
    }

    if (now < game.startTime) {
        return "upcoming";
    }

    if (now <= game.endTime) {
        return "ongoing";
    }

    return "completed";
};
