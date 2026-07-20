import * as z from 'zod';
import { VendorUpdateWithoutVendorcustomersInputObjectSchema as VendorUpdateWithoutVendorcustomersInputObjectSchema } from './VendorUpdateWithoutVendorcustomersInput.schema';
import { VendorUncheckedUpdateWithoutVendorcustomersInputObjectSchema as VendorUncheckedUpdateWithoutVendorcustomersInputObjectSchema } from './VendorUncheckedUpdateWithoutVendorcustomersInput.schema';
import { VendorCreateWithoutVendorcustomersInputObjectSchema as VendorCreateWithoutVendorcustomersInputObjectSchema } from './VendorCreateWithoutVendorcustomersInput.schema';
import { VendorUncheckedCreateWithoutVendorcustomersInputObjectSchema as VendorUncheckedCreateWithoutVendorcustomersInputObjectSchema } from './VendorUncheckedCreateWithoutVendorcustomersInput.schema';
import { VendorWhereInputObjectSchema as VendorWhereInputObjectSchema } from './VendorWhereInput.schema';
const makeSchema = () => z.object({
    update: z.union([z.lazy(() => VendorUpdateWithoutVendorcustomersInputObjectSchema), z.lazy(() => VendorUncheckedUpdateWithoutVendorcustomersInputObjectSchema)]),
    create: z.union([z.lazy(() => VendorCreateWithoutVendorcustomersInputObjectSchema), z.lazy(() => VendorUncheckedCreateWithoutVendorcustomersInputObjectSchema)]),
    where: z.lazy(() => VendorWhereInputObjectSchema).optional()
}).strict();
export const VendorUpsertWithoutVendorcustomersInputObjectSchema = makeSchema();
export const VendorUpsertWithoutVendorcustomersInputObjectZodSchema = makeSchema();
