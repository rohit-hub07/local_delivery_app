import express from "express"
import { Request,Response } from "express";
import dotenv from "dotenv"

dotenv.config();

const app = express();




const PORT = process.env.PORT || 5000;

app.get("/",async (req: Request,res: Response) =>{
  res.status(200).send("App is working")
})

app.listen(PORT,() =>{
  console.log(`App is listening to port: ${PORT}`)
})





