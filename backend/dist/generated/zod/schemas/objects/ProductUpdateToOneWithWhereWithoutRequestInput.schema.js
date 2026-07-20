import * as z from 'zod';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutRequestInputObjectSchema as ProductUpdateWithoutRequestInputObjectSchema } from './ProductUpdateWithoutRequestInput.schema';
import { ProductUncheckedUpdateWithoutRequestInputObjectSchema as ProductUncheckedUpdateWithoutRequestInputObjectSchema } from './ProductUncheckedUpdateWithoutRequestInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => ProductUpdateWithoutRequestInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutRequestInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutRequestInputObjectSchema = makeSchema();
export const ProductUpdateToOneWithWhereWithoutRequestInputObjectZodSchema = makeSchema();
