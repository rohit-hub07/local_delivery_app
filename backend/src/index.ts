import express from "express"
import { Request,Response } from "express";
import dotenv from "dotenv"
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser"
import vendorRouter from "./routes/vendor.routes.js";
import productRouter from "./routes/product.routes.js";

dotenv.config();

const app = express();


app.use(express.json())
app.use(cookieParser())


const PORT = process.env.PORT || 5000;

app.get("/",async (req: Request,res: Response) =>{
  res.status(200).send("App is working")
})

app.use("/auth",userRouter)
app.use("/vendor", vendorRouter)
app.use("/product", productRouter)


app.listen(PORT,() =>{
  console.log(`App is listening to port: ${PORT}`)
})





