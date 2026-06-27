import * as gameService from "../services/game.service.js";
import * as sseService from "../services/sse.service.js";

export const createGame = async (req, res) => {
    try {
        let {
            name,
            location,
            startTime,
            endTime,
            feeType,
            minReliabilityScore,
        } = req.body;

        feeType = feeType?.toUpperCase();

        const hostId = req.userId;

        // Required fields validation
        if (!name || !location || !startTime || !endTime || !feeType) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        // Fee type validation
        const allowedFeeTypes = ["FREE", "SPLIT"];

        if (!allowedFeeTypes.includes(feeType)) {
            return res.status(400).json({
                message: "Invalid fee type",
            });
        }

        // Reliability score validation
        if (minReliabilityScore < 0 || minReliabilityScore > 100) {
            return res.status(400).json({
                message: "Min reliability score must be between 0 and 100",
            });
        }

        // Date validation
        const start = new Date(startTime);
        const end = new Date(endTime);

        // Invalid date check
        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
            return res.status(400).json({
                message: "Invalid date format",
            });
        }

        // End date must be after start date
        if (end <= start) {
            return res.status(400).json({
                message: "End time must be later than start time",
            });
        }

        // Optional: prevent past games
        if (start < new Date()) {
            return res.status(400).json({
                message: "Start time cannot be in the past",
            });
        }

        const game = await gameService.createGame({
            name,
            location,
            startTime,
            endTime,
            feeType,
            minReliabilityScore,
            hostId,
        });

        sseService.sendEventToUser(hostId, "next-game-changed", {
            reason: "game-created",
        });

        res.status(201).json({
            message: "Game created successfully",
            game,
        });
    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const getNextUpcomingGame = async (req, res) => {
    try {
        const userId = req.userId;
        const game = await gameService.getNextUpcomingGame(userId);

        if (!game) {
            return res.status(404).json({
                message: "No upcoming games found",
            });
        }

        res.status(200).json({
            game,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};


export const getAllGames = async (req, res) => {
    try {
        const userId = req.userId;
        const games = await gameService.getAllGames(userId);
        res.status(200).json({
            games,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const getGameById = async (req, res) => {
    try {
        const { gameId } = req.params;
        console.log(req.params);
        const userId = req.userId;
        console.log("Fetching game by ID:", gameId, "for user:", userId);
        const game = await gameService.getGameById(gameId, userId);

        if (!game) {
            return res.status(404).json({
                message: "Game not found",
            });
        }

        res.status(200).json({
            game,
        });
    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const updateGameById = async (req, res) => {
    try {
        const { gameId } = req.params;
        const hostId = req.userId;

        const updatedGame = await gameService.updateGameById(
            gameId,
            hostId,
            req.body,
        );

        if (!updatedGame) {
            return res.status(404).json({
                message: "Game not found or you are not the host",
            });
        }

        res.status(200).json({
            message: "Game updated successfully",
            game: updatedGame,
        });
    } catch (err) {
        console.error(err);

        res.status(400).json({
            message: err.message,
        });
    }
};

export const cancelGameById = async (req, res) => {
    try {
        const { gameId } = req.params;
        const hostId = req.userId;

        const { cancelledGame, notifications } =
            await gameService.cancelGameById(gameId, hostId);

        if (!cancelledGame) {
            return res.status(404).json({
                message: "Game not found or you are not the host",
            });
        }

        sseService.sendEventToUser(hostId, "next-game-changed", {
            reason: "game-cancelled",
        });

        for (const notification of notifications) {
            sseService.sendEventToUser(notification.recipientId, "notification", {
                notification,
            });
            sseService.sendEventToUser(
                notification.recipientId,
                "next-game-changed",
                { reason: "game-cancelled" },
            );
        }

        res.status(200).json({
            message: "Game cancelled successfully",
            game: cancelledGame,
        });
    } catch (err) {
        console.error(err);

        res.status(400).json({
            message: err.message,
        });
    }
};

export const invitePlayerToGame = async (req, res) => {
    try {
        const { gameId } = req.params;
        const { userId } = req.body;

        if (!userId) {
            return res.status(400).json({
                message: "userId is required",
            });
        }

        const { invitation, notification, player } =
            await gameService.invitePlayerToGame(
                req.userId,
                gameId,
                Number(userId),
            );

        sseService.sendEventToUser(Number(userId), "notification", {
            notification,
        });

        sseService.sendEventToUser(Number(userId), "next-game-changed", {
            reason: "game-invited",
        });

        return res.status(201).json({
            message: "Player invited successfully",
            invitation,
            player,
        });
    } catch (err) {
        if (
            err.message === "Game not found or you are not the host" ||
            err.message === "User not found"
        ) {
            return res.status(404).json({ message: err.message });
        }

        return res.status(400).json({ message: err.message });
    }
};

export const respondToInvitation = async (req, res) => {
    try {
        const { gameId } = req.params;
        const { status } = req.body;

        if (!status) {
            return res.status(400).json({
                message: "status is required",
            });
        }

        const normalizedStatus = status.toUpperCase();

        const { invitation, notification } =
            await gameService.respondToInvitation(
            req.userId,
            gameId,
            normalizedStatus,
        );

        if (notification) {
            sseService.sendEventToUser(notification.recipientId, "notification", {
                notification,
            });
            sseService.sendEventToUser(
                notification.recipientId,
                "next-game-changed",
                { reason: "invitation-accepted" },
            );
        }

        return res.status(200).json({
            message: "Invitation updated successfully",
            invitation,
        });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

export const markGameAttendance = async (req, res) => {
    try {
        const { gameId } = req.params;
        const { attendance } = req.body;

        if (!attendance) {
            return res.status(400).json({
                message: "attendance is required",
            });
        }

        const { invitations } = await gameService.markGameAttendance(
            req.userId,
            gameId,
            attendance,
        );

        return res.status(200).json({
            message: "Attendance saved successfully",
            invitations,
        });
    } catch (err) {
        if (err.message === "Game not found or you are not the host") {
            return res.status(404).json({ message: err.message });
        }

        return res.status(400).json({ message: err.message });
    }
};