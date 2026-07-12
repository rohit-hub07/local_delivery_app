import { UserSchema } from "../generated/zod/index.js";
import bcrypt from "bcryptjs";
import { db } from "../libs/db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const signupController = async (req, res) => {
    try {
        const signup = UserSchema.omit({
            id: true,
            createdAt: true,
            updatedAt: true
        });
        const validateBody = signup.safeParse(req.body);
        if (!validateBody.success) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                fieldErrors: validateBody.error.flatten().fieldErrors,
            });
        }
        const { name, phone, password, role } = validateBody.data;
        console.log("Before check the users:");
        // check for existing user
        const existingUser = await db.user.findUnique({
            where: { phone },
        });
        console.log("After checking the user");
        if (existingUser) {
            return res.status(404).json({
                message: "User already exists!",
                success: false
            });
        }
        // hash the password
        const hashedPass = await bcrypt.hash(password, 10);
        const newUser = await db.user.create({
            data: {
                name,
                phone,
                password: hashedPass,
                role
            }
        });
        if (!newUser) {
            return res.status(500).json({
                message: "Something went worng while creating new user!",
                success: false
            });
        }
        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.status(201).json({
            message: "User created successfully",
            success: true,
            user: {
                id: newUser.id,
                name: newUser.name,
                phone: newUser.phone,
                role: newUser.role
            }
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
