import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { isVendor } from "../middlewares/isVendor.js";
import { addCustomers, getAllVendorCustomer, removeCustomer } from "../controllers/vendorCustomers.controllers.js";
import { isCreatedVendorProfile } from "../middlewares/isCreatedVendorProfile.js";
const vendorCustomers = express.Router();
// allow the vendors to add customers
vendorCustomers.post("/add-customer", isAuthenticated, isCreatedVendorProfile, isVendor, addCustomers);
// allow vendors to remove customers
vendorCustomers.delete("/remove-customer/:id", isAuthenticated, isCreatedVendorProfile, isVendor, removeCustomer);
// get all vendor customers
vendorCustomers.get("/all-customers", isAuthenticated, isCreatedVendorProfile, isVendor, getAllVendorCustomer);
//allow customers to leave the vendor (not important as of now)
export default vendorCustomers;
