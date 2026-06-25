import * as notificationService from "../services/notification.service.js";

export const listNotifications = async (req, res) => {
    try {
        const notifications = await notificationService.listNotifications(
            req.userId,
        );

        return res.status(200).json({ notifications });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const getUnreadCount = async (req, res) => {
    try {
        const count = await notificationService.getUnreadCount(req.userId);

        return res.status(200).json({ count });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const markNotificationAsRead = async (req, res) => {
    try {
        const { notificationId } = req.params;

        const notification = await notificationService.markAsRead(
            req.userId,
            notificationId,
        );

        return res.status(200).json({
            message: "Notification marked as read",
            notification,
        });
    } catch (err) {
        if (err.message === "Notification not found") {
            return res.status(404).json({ message: err.message });
        }

        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const markAllNotificationsAsRead = async (req, res) => {
    try {
        const count = await notificationService.markAllAsRead(req.userId);

        return res.status(200).json({
            message: "All notifications marked as read",
            count,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};
