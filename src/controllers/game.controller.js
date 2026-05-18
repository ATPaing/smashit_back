import * as gameService from '../services/game.service.js';

export const createGame = async (req, res) => {
    try {
        const { name, location, startTime, endTime, feeType, minReliabilityScore } = req.body;
        const hostId = req.userId;

        console.log("Creating game with data:", { name, location, startTime, endTime, feeType, minReliabilityScore, hostId });

        if (!name || !location || !startTime || !endTime || !feeType || !minReliabilityScore) {
            return res.status(400).json({ message: "All fields are required" });
        } 

        const game = await gameService.createGame({
            name,
            location,
            startTime: new Date(startTime),
            endTime: new Date(endTime),
            feeType,
            minReliabilityScore,
            hostId
        });

        res.status(201).json({
            message: "Game created successfully",
            game
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};