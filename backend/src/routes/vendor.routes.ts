import express from "express"
import { createVendorProfile, vendorProfile } from "../controllers/vendor.controllers.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { isRoleVendor } from "../middlewares/isRoleVendor.js";
import { isCreatedVendorProfile } from "../middlewares/isCreatedVendorProfile.js";
import { isVendor } from "../middlewares/isVendor.js";

const vendorRouter = express.Router();


vendorRouter.post("/create/vendor-profile",isAuthenticated,isRoleVendor, createVendorProfile)

// fetch vendor profile
vendorRouter.get("/vendor-profile" ,isAuthenticated,isCreatedVendorProfile,isRoleVendor, isVendor, vendorProfile)

export default vendorRouter;