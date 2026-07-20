import { z } from 'zod';
export const ProductScalarFieldEnumSchema = z.enum(['id', 'vendorId', 'productName', 'description', 'createdAt', 'updatedAt']);
export default ProductScalarFieldEnumSchema;
