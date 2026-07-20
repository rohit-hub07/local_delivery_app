import * as z from 'zod';
import { ProductSelectObjectSchema as ProductSelectObjectSchema } from './objects/ProductSelect.schema';
import { ProductUpdateManyMutationInputObjectSchema as ProductUpdateManyMutationInputObjectSchema } from './objects/ProductUpdateManyMutationInput.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './objects/ProductWhereInput.schema';
export const ProductUpdateManyAndReturnSchema = z.object({ select: ProductSelectObjectSchema.optional(), data: ProductUpdateManyMutationInputObjectSchema, where: ProductWhereInputObjectSchema.optional() }).strict();
export const ProductUpdateManyAndReturnZodSchema = z.object({ select: ProductSelectObjectSchema.optional(), data: ProductUpdateManyMutationInputObjectSchema, where: ProductWhereInputObjectSchema.optional() }).strict();
