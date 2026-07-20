import express from "express";
import { currentUserController, loginController, logoutController, signupController } from "../controllers/user.controllers.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
const userRouter = express.Router();
userRouter.post("/signup", signupController);
userRouter.post("/login", loginController);
userRouter.post("/logout", isAuthenticated, logoutController);
userRouter.get("/me", isAuthenticated, currentUserController);
export default userRouter;
