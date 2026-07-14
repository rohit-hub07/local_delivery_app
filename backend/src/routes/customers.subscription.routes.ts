import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { customerSubscribedProduct, subscribeProduct, unsubscribeProduct } from "../controllers/customerSubscription.controlers.js";

const customerSubscriptionRouter = express.Router();

// allow customers to add vendor products
customerSubscriptionRouter.post("/product/add/:id", isAuthenticated,subscribeProduct)

// allow customers to remove vendor products
customerSubscriptionRouter.delete("/product/unsubscribe-product/:id",isAuthenticated,unsubscribeProduct)

// show all the subscribed products 
customerSubscriptionRouter.get("/get/subscribed-product", isAuthenticated, customerSubscribedProduct)


export default customerSubscriptionRouter