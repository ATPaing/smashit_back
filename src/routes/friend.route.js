import express from "express";

import {
    searchUsers,
    sendFriendRequest,
    acceptFriendRequest,
    declineFriendRequest,
    listFriends,
    listIncomingRequests,
    removeFriend,
} from "../controllers/friend.controller.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/search", authMiddleware, searchUsers);
router.get("/requests", authMiddleware, listIncomingRequests);
router.get("/", authMiddleware, listFriends);
router.post("/request", authMiddleware, sendFriendRequest);
router.put("/request/:requestId/accept", authMiddleware, acceptFriendRequest);
router.put("/request/:requestId/decline", authMiddleware, declineFriendRequest);
router.delete("/:friendId", authMiddleware, removeFriend);

export default router;
