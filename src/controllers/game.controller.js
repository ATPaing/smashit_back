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