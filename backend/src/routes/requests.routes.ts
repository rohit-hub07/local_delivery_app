import express from "express" 
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { customerRequest } from "../controllers/request.controllers.js";

const requestRouter = express.Router()

// allow customer to request vendor
requestRouter.post("/new-request", isAuthenticated, customerRequest)

// allow vendor to accept or reject requests


export default requestRouter;