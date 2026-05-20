import express from 'express';

import {
    createGame,
    getNextUpcomingGame
} from '../controllers/game.controller.js';

import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/create', authMiddleware, createGame);

router.get('/next', authMiddleware, getNextUpcomingGame)

export default router;