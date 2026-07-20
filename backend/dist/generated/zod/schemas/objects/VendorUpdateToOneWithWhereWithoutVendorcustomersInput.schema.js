import * as z from 'zod';
import { VendorWhereInputObjectSchema as VendorWhereInputObjectSchema } from './VendorWhereInput.schema';
import { VendorUpdateWithoutVendorcustomersInputObjectSchema as VendorUpdateWithoutVendorcustomersInputObjectSchema } from './VendorUpdateWithoutVendorcustomersInput.schema';
import { VendorUncheckedUpdateWithoutVendorcustomersInputObjectSchema as VendorUncheckedUpdateWithoutVendorcustomersInputObjectSchema } from './VendorUncheckedUpdateWithoutVendorcustomersInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => VendorWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => VendorUpdateWithoutVendorcustomersInputObjectSchema), z.lazy(() => VendorUncheckedUpdateWithoutVendorcustomersInputObjectSchema)])
}).strict();
export const VendorUpdateToOneWithWhereWithoutVendorcustomersInputObjectSchema = makeSchema();
export const VendorUpdateToOneWithWhereWithoutVendorcustomersInputObjectZodSchema = makeSchema();
