import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutRequestInputObjectSchema as ProductCreateWithoutRequestInputObjectSchema } from './ProductCreateWithoutRequestInput.schema';
import { ProductUncheckedCreateWithoutRequestInputObjectSchema as ProductUncheckedCreateWithoutRequestInputObjectSchema } from './ProductUncheckedCreateWithoutRequestInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductCreateWithoutRequestInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutRequestInputObjectSchema)])
}).strict();
export const ProductCreateOrConnectWithoutRequestInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateOrConnectWithoutRequestInput>;
export const ProductCreateOrConnectWithoutRequestInputObjectZodSchema = makeSchema();
