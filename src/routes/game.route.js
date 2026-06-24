import express from 'express';

import {
    createGame,
    getNextUpcomingGame,
    getAllGames,
    getGameById,
    updateGameById,
    cancelGameById,
    invitePlayerToGame,
    respondToInvitation,
    markGameAttendance,
} from '../controllers/game.controller.js';

import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/create', authMiddleware, createGame);

router.get('/next', authMiddleware, getNextUpcomingGame)

router.get('/all', authMiddleware, getAllGames);

router.post("/:gameId/invite", authMiddleware, invitePlayerToGame);

router.put("/:gameId/invitation/respond", authMiddleware, respondToInvitation);

router.put("/:gameId/attendance", authMiddleware, markGameAttendance);

router.get('/:gameId', authMiddleware, getGameById);

router.put('/:gameId', authMiddleware, updateGameById);

router.put("/:gameId/cancel", authMiddleware, cancelGameById);

export default router;