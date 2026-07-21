import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { customerSubscribedProduct, subscribeProduct, unsubscribeProduct, vendorSubscibedProducts } from "../controllers/customerSubscription.controlers.js";
import { isCreatedVendorProfile } from "../middlewares/isCreatedVendorProfile.js";
import { isVendor } from "../middlewares/isVendor.js";
import { isRoleCustomer } from "../middlewares/isRoleCustomer.js";
const customerSubscriptionRouter = express.Router();
customerSubscriptionRouter.post("/product/add/:id", isAuthenticated, isRoleCustomer, subscribeProduct);
customerSubscriptionRouter.delete("/product/unsubscribe-product/:id", isAuthenticated, isRoleCustomer, unsubscribeProduct);
customerSubscriptionRouter.get("/get/subscribed-product", isAuthenticated, isRoleCustomer, customerSubscribedProduct);
customerSubscriptionRouter.get("/get/customer-subcribed-product", isAuthenticated, isCreatedVendorProfile, isVendor, vendorSubscibedProducts);
export default customerSubscriptionRouter;
//# sourceMappingURL=customers.subscription.routes.js.map