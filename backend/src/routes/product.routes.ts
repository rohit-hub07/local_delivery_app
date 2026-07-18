import express from "express"
import { addProduct, getAllProducts, getProductById, removeProduct, showProductsToAddedCustomer } from "../controllers/product.controllers.js";
import { isVendor } from "../middlewares/isVendor.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { isCreatedVendorProfile } from "../middlewares/isCreatedVendorProfile.js";
import { isRoleVendor } from "../middlewares/isRoleVendor.js";
import { isRoleCustomer } from "../middlewares/isRoleCustomer.js";

const productRouter = express.Router();

productRouter.post("/add-product",isAuthenticated,isCreatedVendorProfile,isVendor, addProduct)

productRouter.delete("/delete-product/:id",isAuthenticated,isCreatedVendorProfile,isVendor, removeProduct)

// show all product of vendor to the vendor
productRouter.get("/all-products",isAuthenticated,isRoleVendor,isVendor, getAllProducts)

// get product by id
productRouter.get("/vendor/product/:id", isAuthenticated, getProductById)

// show all the vendor products to vendor customer
productRouter.get("/vendor-products", isAuthenticated, isRoleCustomer,showProductsToAddedCustomer)

export default productRouter;