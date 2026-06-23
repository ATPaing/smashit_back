import * as friendService from "../services/friend.service.js";
import * as sseService from "../services/sse.service.js";

export const searchUsers = async (req, res) => {
    try {
        const { q } = req.query;

        if (!q || !q.trim()) {
            return res.status(400).json({
                message: "Search query is required",
            });
        }

        const users = await friendService.searchUsers(req.userId, q.trim());

        return res.status(200).json({ users });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const sendFriendRequest = async (req, res) => {
    try {
        const { userId } = req.body;

        if (!userId) {
            return res.status(400).json({
                message: "userId is required",
            });
        }

        const { request, notification } = await friendService.sendFriendRequest(
            req.userId,
            Number(userId),
        );

        sseService.sendEventToUser(Number(userId), "notification", {
            notification,
        });

        return res.status(201).json({
            message: "Friend request sent",
            request,
        });
    } catch (err) {
        if (err.message === "User not found") {
            return res.status(404).json({ message: err.message });
        }

        return res.status(400).json({ message: err.message });
    }
};

export const acceptFriendRequest = async (req, res) => {
    try {
        const { requestId } = req.params;

        const { friend, notification } =
            await friendService.acceptFriendRequest(req.userId, requestId);

        sseService.sendEventToUser(friend.id, "notification", {
            notification,
        });

        return res.status(200).json({
            message: "Friend request accepted",
            friend,
        });
    } catch (err) {
        if (err.message === "Friend request not found") {
            return res.status(404).json({ message: err.message });
        }

        if (err.message === "You are not allowed to accept this friend request") {
            return res.status(403).json({ message: err.message });
        }

        return res.status(400).json({ message: err.message });
    }
};

export const declineFriendRequest = async (req, res) => {
    try {
        const { requestId } = req.params;

        const { notification } = await friendService.declineFriendRequest(
            req.userId,
            requestId,
        );

        sseService.sendEventToUser(notification.recipientId, "notification", {
            notification,
        });

        return res.status(200).json({
            message: "Friend request declined",
        });
    } catch (err) {
        if (err.message === "Friend request not found") {
            return res.status(404).json({ message: err.message });
        }

        if (
            err.message === "You are not allowed to decline this friend request"
        ) {
            return res.status(403).json({ message: err.message });
        }

        return res.status(400).json({ message: err.message });
    }
};

export const listFriends = async (req, res) => {
    try {
        const friends = await friendService.listFriends(req.userId);

        return res.status(200).json({ friends });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const listIncomingRequests = async (req, res) => {
    try {
        const requests = await friendService.listIncomingRequests(req.userId);

        return res.status(200).json({ requests });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const removeFriend = async (req, res) => {
    try {
        const { friendId } = req.params;

        await friendService.removeFriend(req.userId, friendId);

        return res.status(200).json({
            message: "Friend removed successfully",
        });
    } catch (err) {
        if (err.message === "Friendship not found") {
            return res.status(404).json({ message: err.message });
        }

        return res.status(400).json({ message: err.message });
    }
};
