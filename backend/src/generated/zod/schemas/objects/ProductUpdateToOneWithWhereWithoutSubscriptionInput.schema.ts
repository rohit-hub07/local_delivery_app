import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutSubscriptionInputObjectSchema as ProductUpdateWithoutSubscriptionInputObjectSchema } from './ProductUpdateWithoutSubscriptionInput.schema';
import { ProductUncheckedUpdateWithoutSubscriptionInputObjectSchema as ProductUncheckedUpdateWithoutSubscriptionInputObjectSchema } from './ProductUncheckedUpdateWithoutSubscriptionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductUpdateWithoutSubscriptionInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutSubscriptionInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutSubscriptionInputObjectSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutSubscriptionInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutSubscriptionInput>;
export const ProductUpdateToOneWithWhereWithoutSubscriptionInputObjectZodSchema = makeSchema();
