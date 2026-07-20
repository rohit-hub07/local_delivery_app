import * as z from 'zod';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutVendorInputObjectSchema as ProductUpdateWithoutVendorInputObjectSchema } from './ProductUpdateWithoutVendorInput.schema';
import { ProductUncheckedUpdateWithoutVendorInputObjectSchema as ProductUncheckedUpdateWithoutVendorInputObjectSchema } from './ProductUncheckedUpdateWithoutVendorInput.schema';
import { ProductCreateWithoutVendorInputObjectSchema as ProductCreateWithoutVendorInputObjectSchema } from './ProductCreateWithoutVendorInput.schema';
import { ProductUncheckedCreateWithoutVendorInputObjectSchema as ProductUncheckedCreateWithoutVendorInputObjectSchema } from './ProductUncheckedCreateWithoutVendorInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    update: z.union([z.lazy(() => ProductUpdateWithoutVendorInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutVendorInputObjectSchema)]),
    create: z.union([z.lazy(() => ProductCreateWithoutVendorInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutVendorInputObjectSchema)])
}).strict();
export const ProductUpsertWithWhereUniqueWithoutVendorInputObjectSchema = makeSchema();
export const ProductUpsertWithWhereUniqueWithoutVendorInputObjectZodSchema = makeSchema();
