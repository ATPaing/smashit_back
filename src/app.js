import express from 'express';
import cors from 'cors';

import authRoutes from "./routes/auth.route.js";
import gameRoutes from './routes/game.route.js';
import friendRoutes from "./routes/friend.route.js";
import sseRoutes from "./routes/sse.route.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/auth", authRoutes);

app.use('/game', gameRoutes)

app.use("/friend", friendRoutes);

app.use("/sse", sseRoutes);


export default app;