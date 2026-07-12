import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.get("/", async (req, res) => {
    res.status(200).send("App is working");
});
app.use("/auth", userRouter);
app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});
