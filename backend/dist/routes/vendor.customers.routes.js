import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { isVendor } from "../middlewares/isVendor.js";
import { addCustomers, getAllVendorCustomer, removeCustomer } from "../controllers/vendorCustomers.controllers.js";
import { isCreatedVendorProfile } from "../middlewares/isCreatedVendorProfile.js";
const vendorCustomers = express.Router();
vendorCustomers.post("/add-customer", isAuthenticated, isCreatedVendorProfile, isVendor, addCustomers);
vendorCustomers.delete("/remove-customer/:id", isAuthenticated, isCreatedVendorProfile, isVendor, removeCustomer);
vendorCustomers.get("/all-customers", isAuthenticated, isCreatedVendorProfile, isVendor, getAllVendorCustomer);
export default vendorCustomers;
//# sourceMappingURL=vendor.customers.routes.js.map