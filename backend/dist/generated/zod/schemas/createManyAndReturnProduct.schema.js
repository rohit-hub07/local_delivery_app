import * as z from 'zod';
import { ProductSelectObjectSchema as ProductSelectObjectSchema } from './objects/ProductSelect.schema';
import { ProductCreateManyInputObjectSchema as ProductCreateManyInputObjectSchema } from './objects/ProductCreateManyInput.schema';
export const ProductCreateManyAndReturnSchema = z.object({ select: ProductSelectObjectSchema.optional(), data: z.union([ProductCreateManyInputObjectSchema, z.array(ProductCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const ProductCreateManyAndReturnZodSchema = z.object({ select: ProductSelectObjectSchema.optional(), data: z.union([ProductCreateManyInputObjectSchema, z.array(ProductCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
