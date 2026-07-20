import * as z from 'zod';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './objects/ProductWhereInput.schema';
export const ProductDeleteManySchema = z.object({ where: ProductWhereInputObjectSchema.optional() }).strict();
export const ProductDeleteManyZodSchema = z.object({ where: ProductWhereInputObjectSchema.optional() }).strict();
