import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProductCreateWithoutSubscriptionInputObjectSchema as ProductCreateWithoutSubscriptionInputObjectSchema } from './ProductCreateWithoutSubscriptionInput.schema';
import { ProductUncheckedCreateWithoutSubscriptionInputObjectSchema as ProductUncheckedCreateWithoutSubscriptionInputObjectSchema } from './ProductUncheckedCreateWithoutSubscriptionInput.schema';
import { ProductCreateOrConnectWithoutSubscriptionInputObjectSchema as ProductCreateOrConnectWithoutSubscriptionInputObjectSchema } from './ProductCreateOrConnectWithoutSubscriptionInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutSubscriptionInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutSubscriptionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutSubscriptionInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductCreateNestedOneWithoutSubscriptionInputObjectSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutSubscriptionInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateNestedOneWithoutSubscriptionInput>;
export const ProductCreateNestedOneWithoutSubscriptionInputObjectZodSchema = makeSchema();
