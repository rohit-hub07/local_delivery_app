import { z } from 'zod';
/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////
export const ProductSchema = z.object({
    id: z.uuid(),
    vendorId: z.string(),
    productName: z.string().min(2, { message: "Product name must be of at least 2 characters" }),
    description: z.string().min(2, { message: "Product description must be of at leat 2 characters" }),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});
export default ProductSchema;
