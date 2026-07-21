import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { db } from "../libs/db.js";
dotenv.config();
export const isAuthenticated = async (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).json({ message: "No token" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(`decode value: ${decode.id}`);
    const user = await db.user.findUnique({
        where: {
            id: decode.id
        },
        select: {
            id: true,
            name: true,
            role: true,
            phone: true,
            address: true
        }
    });
    if (!user) {
        return res.status(401).json({
            message: "User not found",
        });
    }
    req.user = user;
    return next();
};
//# sourceMappingURL=isAuthenticated.js.map