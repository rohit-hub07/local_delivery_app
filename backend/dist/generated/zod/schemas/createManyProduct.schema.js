import * as z from 'zod';
import { ProductCreateManyInputObjectSchema as ProductCreateManyInputObjectSchema } from './objects/ProductCreateManyInput.schema';
export const ProductCreateManySchema = z.object({ data: z.union([ProductCreateManyInputObjectSchema, z.array(ProductCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const ProductCreateManyZodSchema = z.object({ data: z.union([ProductCreateManyInputObjectSchema, z.array(ProductCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
