import express from "express"
import { createVendorProfile } from "../controllers/vendor.controllers.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { isVendor } from "../middlewares/isVendor.js";

const vendorRouter = express.Router();

vendorRouter.post("/create/vendor-profile",isAuthenticated,isVendor, createVendorProfile)

export default vendorRouter;