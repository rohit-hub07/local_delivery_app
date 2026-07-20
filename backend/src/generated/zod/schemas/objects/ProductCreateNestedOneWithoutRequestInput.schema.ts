import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProductCreateWithoutRequestInputObjectSchema as ProductCreateWithoutRequestInputObjectSchema } from './ProductCreateWithoutRequestInput.schema';
import { ProductUncheckedCreateWithoutRequestInputObjectSchema as ProductUncheckedCreateWithoutRequestInputObjectSchema } from './ProductUncheckedCreateWithoutRequestInput.schema';
import { ProductCreateOrConnectWithoutRequestInputObjectSchema as ProductCreateOrConnectWithoutRequestInputObjectSchema } from './ProductCreateOrConnectWithoutRequestInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutRequestInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutRequestInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutRequestInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductCreateNestedOneWithoutRequestInputObjectSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateNestedOneWithoutRequestInput>;
export const ProductCreateNestedOneWithoutRequestInputObjectZodSchema = makeSchema();
