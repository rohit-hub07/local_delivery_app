import express from "express"
import { createVendorProfile } from "../controllers/vendor.controllers.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { isRoleVendor } from "../middlewares/isRoleVendor.js";

const vendorRouter = express.Router();

vendorRouter.post("/create/vendor-profile",isAuthenticated,isRoleVendor, createVendorProfile)

export default vendorRouter;