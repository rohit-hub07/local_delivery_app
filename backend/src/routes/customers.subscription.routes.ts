import express from "express"
import {
  customerSubscribedProduct,
  getMySubscriptions,
  getSubscriptionCalendar,
  subscribeProduct,
  unsubscribeProduct,
  vendorSubscibedProducts,
} from "../controllers/customerSubscription.controlers.js"
import { isAuthenticated } from "../middlewares/isAuthenticated.js"
import { isCreatedVendorProfile } from "../middlewares/isCreatedVendorProfile.js"
import { isRoleCustomer } from "../middlewares/isRoleCustomer.js"
import { isVendor } from "../middlewares/isVendor.js"

const customerSubscriptionRouter = express.Router()

customerSubscriptionRouter.post("/product/add/:id", isAuthenticated, isRoleCustomer, subscribeProduct)
customerSubscriptionRouter.delete("/product/unsubscribe-product/:id", isAuthenticated, isRoleCustomer, unsubscribeProduct)
customerSubscriptionRouter.get("/get/subscribed-product", isAuthenticated, isRoleCustomer, customerSubscribedProduct)
customerSubscriptionRouter.get("/get/customer-subcribed-product", isAuthenticated, isCreatedVendorProfile, isVendor, vendorSubscibedProducts)

// get the subscription states of the customer
customerSubscriptionRouter.get("/my-subscriptions", isAuthenticated, isRoleCustomer, getMySubscriptions)

// show the customer the detailed calender of the product delivered or skiped
customerSubscriptionRouter.get("/calendar/:id", isAuthenticated, isRoleCustomer, getSubscriptionCalendar)

export default customerSubscriptionRouter
