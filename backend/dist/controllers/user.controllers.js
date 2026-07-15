import { UserSchema } from "../generated/zod/index.js";
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
        const { name, phone, role, address } = validateBody.data;
        // console.log("Before check the users:")
        // check for existing user
        const existingUser = await db.user.findUnique({
            where: { phone },
        });
        // console.log("After checking the user")
        if (existingUser) {
            return res.status(404).json({
                message: "User already exists!",
                success: false
            });
        }
        // hash the password
        // const hashedPass = await bcrypt.hash(password,10);
        const newUser = await db.user.create({
            data: {
                name,
                phone,
                role,
                address
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
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.status(201).json({
            message: "User created successfully",
            success: true,
            user: {
                id: newUser.id,
                name: newUser.name,
                phone: newUser.phone,
                role: newUser.role,
                address: newUser.address
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
export const loginController = async (req, res) => {
    try {
        console.log("Backend is hit by frontend");
        const login = UserSchema.omit({
            id: true,
            name: true,
            role: true,
            address: true,
            createdAt: true,
            updatedAt: true,
        });
        const validateBody = login.safeParse(req.body);
        if (!validateBody.success) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                fieldErrors: validateBody.error.flatten().fieldErrors,
            });
        }
        const { phone } = validateBody.data;
        const user = await db.user.findUnique({ where: { phone } });
        if (!user) {
            return res.status(404).json({
                message: "User doesn't exist! Please create a new account!",
                success: false,
            });
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        return res.status(200).json({
            message: "Login successful",
            success: true,
            user: {
                id: user.id,
                phone: user.phone,
                name: user.name,
                role: user.role
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
export const logoutController = async (req, res) => {
    try {
        res.cookie("token", ' ', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        res.status(200).json({
            message: "User logout successfully!",
            success: true,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false,
        });
    }
};
export const currentUserController = async (req, res) => {
    try {
        // const userid = await isAuthenticated(req, res);
        // const user = await db.user.findUnique({where: {id: userid}})
        const user = req.user;
        // console.log("user inside of curr controller: ", user)
        if (!user) {
            return res.status(404).json({
                message: "Unauthorize",
                success: false
            });
        }
        return res.status(200).json({
            message: "User data fetched successfully!",
            success: true,
            user: user
        });
    }
    catch (error) {
        console.log("Error in curr controller: ", error.message);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};
