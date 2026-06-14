import express from 'express';

import {
    createGame,
    getNextUpcomingGame,
    getAllGames
} from '../controllers/game.controller.js';

import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/create', authMiddleware, createGame);

router.get('/next', authMiddleware, getNextUpcomingGame)

router.get('/all', authMiddleware, getAllGames);


export default router;