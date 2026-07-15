import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { customerSubscribedProduct, subscribeProduct, unsubscribeProduct, vendorSubscibedProducts } from "../controllers/customerSubscription.controlers.js";
import { isCreatedVendorProfile } from "../middlewares/isCreatedVendorProfile.js";
import { isVendor } from "../middlewares/isVendor.js";

const customerSubscriptionRouter = express.Router();

// allow customers to add vendor products
customerSubscriptionRouter.post("/product/add/:id", isAuthenticated,subscribeProduct)

// allow customers to remove vendor products
customerSubscriptionRouter.delete("/product/unsubscribe-product/:id",isAuthenticated,unsubscribeProduct)

// show all the subscribed products 
customerSubscriptionRouter.get("/get/subscribed-product", isAuthenticated, customerSubscribedProduct)

// show all the customer subscribed products to the vendor
customerSubscriptionRouter.get("/get/customer-subcribed-product", isAuthenticated, isCreatedVendorProfile, isVendor, vendorSubscibedProducts)

export default customerSubscriptionRouter