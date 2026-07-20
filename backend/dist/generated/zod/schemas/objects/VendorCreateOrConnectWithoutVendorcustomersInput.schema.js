import * as z from 'zod';
import { VendorWhereUniqueInputObjectSchema as VendorWhereUniqueInputObjectSchema } from './VendorWhereUniqueInput.schema';
import { VendorCreateWithoutVendorcustomersInputObjectSchema as VendorCreateWithoutVendorcustomersInputObjectSchema } from './VendorCreateWithoutVendorcustomersInput.schema';
import { VendorUncheckedCreateWithoutVendorcustomersInputObjectSchema as VendorUncheckedCreateWithoutVendorcustomersInputObjectSchema } from './VendorUncheckedCreateWithoutVendorcustomersInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => VendorWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => VendorCreateWithoutVendorcustomersInputObjectSchema), z.lazy(() => VendorUncheckedCreateWithoutVendorcustomersInputObjectSchema)])
}).strict();
export const VendorCreateOrConnectWithoutVendorcustomersInputObjectSchema = makeSchema();
export const VendorCreateOrConnectWithoutVendorcustomersInputObjectZodSchema = makeSchema();
