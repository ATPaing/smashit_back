import jwt from "jsonwebtoken";
import * as authService from "../services/auth.service.js";

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await authService.signup({ name, email, password });

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.status(201).json({
            message: "Signup successful",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await authService.login(email, password);

        return res.status(200).json(result);
    } catch (err) {
        return res.status(400).json({
            message: err.message,
        });
    }
};


export const getMe = async (req, res) => {
    try {
        const user = await authService.getCurrentUser(req.userId);

        return res.status(200).json({
            user,
        });
    } catch (err) {
        return res.status(404).json({
            message: err.message,
        });
    }
};