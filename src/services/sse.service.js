const clients = new Map();

export const addClient = (userId, res) => {
    const key = String(userId);

    if (!clients.has(key)) {
        clients.set(key, new Set());
    }

    clients.get(key).add(res);
};

export const removeClient = (userId, res) => {
    const key = String(userId);

    if (!clients.has(key)) return;

    clients.get(key).delete(res);

    if (clients.get(key).size === 0) {
        clients.delete(key);
    }
};

export const sendEventToUser = (userId, eventName, data = {}) => {
    const key = String(userId);
    const userClients = clients.get(key);

    if (!userClients) return;

    userClients.forEach((client) => {
        client.write(`event: ${eventName}\n`);
        client.write(`data: ${JSON.stringify(data)}\n\n`);
    });
};