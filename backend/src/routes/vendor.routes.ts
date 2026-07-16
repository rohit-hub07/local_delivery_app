import express from "express"
import { createVendorProfile, vendorProfile } from "../controllers/vendor.controllers.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { isRoleVendor } from "../middlewares/isRoleVendor.js";

const vendorRouter = express.Router();

// fetch vendor profile
vendorRouter.get("/vendor-profile/:id", isAuthenticated, vendorProfile)

vendorRouter.post("/create/vendor-profile",isAuthenticated,isRoleVendor, createVendorProfile)


export default vendorRouter;