import express from "express";
import { signupController } from "../controllers/user.controllers.js";
const userRouter = express.Router();
userRouter.post("/signup", signupController);
export default userRouter;
