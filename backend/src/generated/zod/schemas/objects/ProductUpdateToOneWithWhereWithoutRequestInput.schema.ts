import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutRequestInputObjectSchema as ProductUpdateWithoutRequestInputObjectSchema } from './ProductUpdateWithoutRequestInput.schema';
import { ProductUncheckedUpdateWithoutRequestInputObjectSchema as ProductUncheckedUpdateWithoutRequestInputObjectSchema } from './ProductUncheckedUpdateWithoutRequestInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductUpdateWithoutRequestInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutRequestInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutRequestInputObjectSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutRequestInput>;
export const ProductUpdateToOneWithWhereWithoutRequestInputObjectZodSchema = makeSchema();
