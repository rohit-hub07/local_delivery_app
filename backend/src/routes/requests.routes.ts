import express from "express" 
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { customerRequest, customerRequestStatus, getCustomerRequests, vendorResponse } from "../controllers/request.controllers.js";
import { isCreatedVendorProfile } from "../middlewares/isCreatedVendorProfile.js";
import { isVendor } from "../middlewares/isVendor.js";

const requestRouter = express.Router()

// allow customer to request vendor
requestRouter.post("/new-request", isAuthenticated, customerRequest)

// list all the requests of customers to the vendor
requestRouter.get("/all-requests",isAuthenticated,isCreatedVendorProfile,isVendor, getCustomerRequests)

// allow vendor to accept or reject requests
requestRouter.put("/update-request/:id", isAuthenticated,isCreatedVendorProfile,isVendor,vendorResponse)

// list the status of request to the customer
requestRouter.get("/request-status", isAuthenticated, customerRequestStatus)

export default requestRouter;