import prisma from "../config/prisma.js";

export const listNotifications = async (userId) => {
    return prisma.notification.findMany({
        where: { recipientId: userId },
        orderBy: { createdAt: "desc" },
    });
};

export const getUnreadCount = async (userId) => {
    return prisma.notification.count({
        where: {
            recipientId: userId,
            isRead: false,
        },
    });
};

export const markAsRead = async (userId, notificationId) => {
    const notification = await prisma.notification.findFirst({
        where: {
            id: Number(notificationId),
            recipientId: userId,
        },
    });

    if (!notification) {
        throw new Error("Notification not found");
    }

    if (notification.isRead) {
        return notification;
    }

    return prisma.notification.update({
        where: { id: notification.id },
        data: { isRead: true },
    });
};

export const markAllAsRead = async (userId) => {
    const result = await prisma.notification.updateMany({
        where: {
            recipientId: userId,
            isRead: false,
        },
        data: { isRead: true },
    });

    return result.count;
};
