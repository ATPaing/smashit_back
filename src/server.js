import app from "./app.js";
import prisma from "./config/prisma.js";

const PORT = process.env.PORT || 3000;



startServer();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


async function startServer() {
    try {
        await prisma.$queryRaw`SELECT 1`;

        console.log("Database connected successfully");

        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });
    } catch (err) {
        console.error("Failed to connect database:", err);
    }
}