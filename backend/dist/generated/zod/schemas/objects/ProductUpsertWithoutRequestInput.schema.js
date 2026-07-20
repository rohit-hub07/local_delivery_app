import * as z from 'zod';
import { ProductUpdateWithoutRequestInputObjectSchema as ProductUpdateWithoutRequestInputObjectSchema } from './ProductUpdateWithoutRequestInput.schema';
import { ProductUncheckedUpdateWithoutRequestInputObjectSchema as ProductUncheckedUpdateWithoutRequestInputObjectSchema } from './ProductUncheckedUpdateWithoutRequestInput.schema';
import { ProductCreateWithoutRequestInputObjectSchema as ProductCreateWithoutRequestInputObjectSchema } from './ProductCreateWithoutRequestInput.schema';
import { ProductUncheckedCreateWithoutRequestInputObjectSchema as ProductUncheckedCreateWithoutRequestInputObjectSchema } from './ProductUncheckedCreateWithoutRequestInput.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
const makeSchema = () => z.object({
    update: z.union([z.lazy(() => ProductUpdateWithoutRequestInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutRequestInputObjectSchema)]),
    create: z.union([z.lazy(() => ProductCreateWithoutRequestInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutRequestInputObjectSchema)]),
    where: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict();
export const ProductUpsertWithoutRequestInputObjectSchema = makeSchema();
export const ProductUpsertWithoutRequestInputObjectZodSchema = makeSchema();
