import * as z from 'zod';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutVendorInputObjectSchema as ProductUpdateWithoutVendorInputObjectSchema } from './ProductUpdateWithoutVendorInput.schema';
import { ProductUncheckedUpdateWithoutVendorInputObjectSchema as ProductUncheckedUpdateWithoutVendorInputObjectSchema } from './ProductUncheckedUpdateWithoutVendorInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => ProductUpdateWithoutVendorInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutVendorInputObjectSchema)])
}).strict();
export const ProductUpdateWithWhereUniqueWithoutVendorInputObjectSchema = makeSchema();
export const ProductUpdateWithWhereUniqueWithoutVendorInputObjectZodSchema = makeSchema();
