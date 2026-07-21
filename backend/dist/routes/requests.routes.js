import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { customerRequest, customerRequestStatus, getCustomerRequests, vendorResponse } from "../controllers/request.controllers.js";
import { isCreatedVendorProfile } from "../middlewares/isCreatedVendorProfile.js";
import { isVendor } from "../middlewares/isVendor.js";
import { isRoleCustomer } from "../middlewares/isRoleCustomer.js";
const requestRouter = express.Router();
requestRouter.post("/new-request", isAuthenticated, isRoleCustomer, customerRequest);
requestRouter.get("/all-requests", isAuthenticated, isCreatedVendorProfile, isVendor, getCustomerRequests);
requestRouter.put("/update-request/:id", isAuthenticated, isCreatedVendorProfile, isVendor, vendorResponse);
requestRouter.get("/request-status", isAuthenticated, isRoleCustomer, customerRequestStatus);
export default requestRouter;
//# sourceMappingURL=requests.routes.js.map