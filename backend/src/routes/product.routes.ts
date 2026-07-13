import express from "express"
import { addProduct, getAllProducts, getProductById, removeProduct } from "../controllers/product.controllers.js";
import { isVendor } from "../middlewares/isVendor.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { isCreatedVendorProfile } from "../middlewares/isCreatedVendorProfile.js";

const productRouter = express.Router();

productRouter.post("/add-product",isAuthenticated,isCreatedVendorProfile,isVendor, addProduct)

productRouter.delete("/delete-product/:id",isAuthenticated,isCreatedVendorProfile,isVendor, removeProduct)

// show all product of vendor
productRouter.get("/all-products/:id",isAuthenticated, getAllProducts)

// get product by id
productRouter.get("/vendor/product/:id", isAuthenticated, getProductById)

export default productRouter;