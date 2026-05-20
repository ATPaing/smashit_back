import * as sseService from "../services/sse.service.js";

export const connectSSE = (req, res) => {
    const userId = req.userId;

    console.log("SSE connected user:", req.userId);

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    res.write("event: connected\n");
    res.write(`data: ${JSON.stringify({ message: "SSE connected" })}\n\n`);

    sseService.addClient(userId, res);
    console.log("SSE connected user:", req.userId);
    req.on("close", () => {
        sseService.removeClient(userId, res);
    });
};