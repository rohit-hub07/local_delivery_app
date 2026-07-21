import express from "express";
import { addProduct, getAllProducts, getProductById, removeProduct, showProductsToAddedCustomer } from "../controllers/product.controllers.js";
import { isVendor } from "../middlewares/isVendor.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { isCreatedVendorProfile } from "../middlewares/isCreatedVendorProfile.js";
import { isRoleVendor } from "../middlewares/isRoleVendor.js";
import { isRoleCustomer } from "../middlewares/isRoleCustomer.js";
const productRouter = express.Router();
productRouter.post("/add-product", isAuthenticated, isCreatedVendorProfile, isVendor, addProduct);
productRouter.delete("/delete-product/:id", isAuthenticated, isCreatedVendorProfile, isVendor, removeProduct);
productRouter.get("/all-products", isAuthenticated, isRoleVendor, isVendor, getAllProducts);
productRouter.get("/vendor/product/:id", isAuthenticated, getProductById);
productRouter.get("/vendor-products/:vendorId", isAuthenticated, isRoleCustomer, showProductsToAddedCustomer);
export default productRouter;
//# sourceMappingURL=product.routes.js.map