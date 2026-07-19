import express from "express"
import { createVendorProfile, getALlVendorProfile, vendorProfile } from "../controllers/vendor.controllers.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { isRoleVendor } from "../middlewares/isRoleVendor.js";
import { isCreatedVendorProfile } from "../middlewares/isCreatedVendorProfile.js";
import { isVendor } from "../middlewares/isVendor.js";
import { isRoleCustomer } from "../middlewares/isRoleCustomer.js";

const vendorRouter = express.Router();


vendorRouter.post("/create/vendor-profile",isAuthenticated,isRoleVendor, createVendorProfile)

// fetch vendor profile
vendorRouter.get("/vendor-profile" ,isAuthenticated,isCreatedVendorProfile,isRoleVendor, isVendor, vendorProfile)


// fetch all the vendor profile to the added customer by the vendor
vendorRouter.get("/customer/vendor-profile", isAuthenticated, isRoleCustomer, getALlVendorProfile)

export default vendorRouter;