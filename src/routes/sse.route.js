import express from "express";
import { connectSSE } from "../controllers/sse.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/events", authMiddleware, connectSSE);

export default router;
