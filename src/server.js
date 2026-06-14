import app from "./app.js";
import prisma from "./config/prisma.js";

const PORT = process.env.PORT || 3000;



startServer();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

async function startServer() {
    try {
        await prisma.$connect();
        console.log("Database connected");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
}