import * as z from 'zod';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutVendorInputObjectSchema as ProductCreateWithoutVendorInputObjectSchema } from './ProductCreateWithoutVendorInput.schema';
import { ProductUncheckedCreateWithoutVendorInputObjectSchema as ProductUncheckedCreateWithoutVendorInputObjectSchema } from './ProductUncheckedCreateWithoutVendorInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => ProductCreateWithoutVendorInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutVendorInputObjectSchema)])
}).strict();
export const ProductCreateOrConnectWithoutVendorInputObjectSchema = makeSchema();
export const ProductCreateOrConnectWithoutVendorInputObjectZodSchema = makeSchema();
