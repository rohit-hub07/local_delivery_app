import express from "express";
import { createVendorProfile, getALlVendorProfile, vendorProfile } from "../controllers/vendor.controllers.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { isRoleVendor } from "../middlewares/isRoleVendor.js";
import { isCreatedVendorProfile } from "../middlewares/isCreatedVendorProfile.js";
import { isVendor } from "../middlewares/isVendor.js";
import { isRoleCustomer } from "../middlewares/isRoleCustomer.js";
const vendorRouter = express.Router();
vendorRouter.post("/create/vendor-profile", isAuthenticated, isRoleVendor, createVendorProfile);
vendorRouter.get("/vendor-profile", isAuthenticated, isCreatedVendorProfile, isRoleVendor, isVendor, vendorProfile);
vendorRouter.get("/customer/vendor-profile", isAuthenticated, isRoleCustomer, getALlVendorProfile);
export default vendorRouter;
//# sourceMappingURL=vendor.routes.js.map