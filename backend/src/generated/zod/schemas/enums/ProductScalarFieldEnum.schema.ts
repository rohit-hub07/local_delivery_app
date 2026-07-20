import * as z from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id', 'vendorId', 'productName', 'description', 'createdAt', 'updatedAt'])

export type ProductScalarFieldEnum = z.infer<typeof ProductScalarFieldEnumSchema>;