import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { customerSubscribedProduct, subscribeProduct, unsubscribeProduct, vendorSubscibedProducts } from "../controllers/customerSubscription.controlers.js";
import { isCreatedVendorProfile } from "../middlewares/isCreatedVendorProfile.js";
import { isVendor } from "../middlewares/isVendor.js";
import { isRoleCustomer } from "../middlewares/isRoleCustomer.js";

const customerSubscriptionRouter = express.Router();

// allow customers to add vendor products
customerSubscriptionRouter.post("/product/add/:id", isAuthenticated,isRoleCustomer,subscribeProduct)

// allow customers to remove vendor products
customerSubscriptionRouter.delete("/product/unsubscribe-product/:id",isAuthenticated,isRoleCustomer,unsubscribeProduct)

// show all the subscribed products to the customer
customerSubscriptionRouter.get("/get/subscribed-product", isAuthenticated,isRoleCustomer, customerSubscribedProduct)

// show all the customer subscribed products to the vendor
customerSubscriptionRouter.get("/get/customer-subcribed-product", isAuthenticated, isCreatedVendorProfile, isVendor, vendorSubscibedProducts)

export default customerSubscriptionRouter