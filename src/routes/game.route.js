import express from 'express';

import {
    createGame
} from '../controllers/game.controller.js';

import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/create', authMiddleware, createGame);

export default router;