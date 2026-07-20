import * as z from 'zod';
import { ProductUpdateManyMutationInputObjectSchema as ProductUpdateManyMutationInputObjectSchema } from './objects/ProductUpdateManyMutationInput.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './objects/ProductWhereInput.schema';
export const ProductUpdateManySchema = z.object({ data: ProductUpdateManyMutationInputObjectSchema, where: ProductWhereInputObjectSchema.optional() }).strict();
export const ProductUpdateManyZodSchema = z.object({ data: ProductUpdateManyMutationInputObjectSchema, where: ProductWhereInputObjectSchema.optional() }).strict();
