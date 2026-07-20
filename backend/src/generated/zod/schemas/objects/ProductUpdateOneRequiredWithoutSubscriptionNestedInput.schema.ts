import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProductCreateWithoutSubscriptionInputObjectSchema as ProductCreateWithoutSubscriptionInputObjectSchema } from './ProductCreateWithoutSubscriptionInput.schema';
import { ProductUncheckedCreateWithoutSubscriptionInputObjectSchema as ProductUncheckedCreateWithoutSubscriptionInputObjectSchema } from './ProductUncheckedCreateWithoutSubscriptionInput.schema';
import { ProductCreateOrConnectWithoutSubscriptionInputObjectSchema as ProductCreateOrConnectWithoutSubscriptionInputObjectSchema } from './ProductCreateOrConnectWithoutSubscriptionInput.schema';
import { ProductUpsertWithoutSubscriptionInputObjectSchema as ProductUpsertWithoutSubscriptionInputObjectSchema } from './ProductUpsertWithoutSubscriptionInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateToOneWithWhereWithoutSubscriptionInputObjectSchema as ProductUpdateToOneWithWhereWithoutSubscriptionInputObjectSchema } from './ProductUpdateToOneWithWhereWithoutSubscriptionInput.schema';
import { ProductUpdateWithoutSubscriptionInputObjectSchema as ProductUpdateWithoutSubscriptionInputObjectSchema } from './ProductUpdateWithoutSubscriptionInput.schema';
import { ProductUncheckedUpdateWithoutSubscriptionInputObjectSchema as ProductUncheckedUpdateWithoutSubscriptionInputObjectSchema } from './ProductUncheckedUpdateWithoutSubscriptionInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutSubscriptionInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutSubscriptionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutSubscriptionInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutSubscriptionInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutSubscriptionInputObjectSchema), z.lazy(() => ProductUpdateWithoutSubscriptionInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutSubscriptionInputObjectSchema)]).optional()
}).strict();
export const ProductUpdateOneRequiredWithoutSubscriptionNestedInputObjectSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutSubscriptionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateOneRequiredWithoutSubscriptionNestedInput>;
export const ProductUpdateOneRequiredWithoutSubscriptionNestedInputObjectZodSchema = makeSchema();
