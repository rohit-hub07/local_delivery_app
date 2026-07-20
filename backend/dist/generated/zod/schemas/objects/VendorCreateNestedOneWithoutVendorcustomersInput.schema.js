import * as z from 'zod';
import { VendorCreateWithoutVendorcustomersInputObjectSchema as VendorCreateWithoutVendorcustomersInputObjectSchema } from './VendorCreateWithoutVendorcustomersInput.schema';
import { VendorUncheckedCreateWithoutVendorcustomersInputObjectSchema as VendorUncheckedCreateWithoutVendorcustomersInputObjectSchema } from './VendorUncheckedCreateWithoutVendorcustomersInput.schema';
import { VendorCreateOrConnectWithoutVendorcustomersInputObjectSchema as VendorCreateOrConnectWithoutVendorcustomersInputObjectSchema } from './VendorCreateOrConnectWithoutVendorcustomersInput.schema';
import { VendorWhereUniqueInputObjectSchema as VendorWhereUniqueInputObjectSchema } from './VendorWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => VendorCreateWithoutVendorcustomersInputObjectSchema), z.lazy(() => VendorUncheckedCreateWithoutVendorcustomersInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => VendorCreateOrConnectWithoutVendorcustomersInputObjectSchema).optional(),
    connect: z.lazy(() => VendorWhereUniqueInputObjectSchema).optional()
}).strict();
export const VendorCreateNestedOneWithoutVendorcustomersInputObjectSchema = makeSchema();
export const VendorCreateNestedOneWithoutVendorcustomersInputObjectZodSchema = makeSchema();
