import * as z from 'zod';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './VendorCustomersWhereUniqueInput.schema';
import { VendorCustomersCreateWithoutVendorInputObjectSchema as VendorCustomersCreateWithoutVendorInputObjectSchema } from './VendorCustomersCreateWithoutVendorInput.schema';
import { VendorCustomersUncheckedCreateWithoutVendorInputObjectSchema as VendorCustomersUncheckedCreateWithoutVendorInputObjectSchema } from './VendorCustomersUncheckedCreateWithoutVendorInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => VendorCustomersCreateWithoutVendorInputObjectSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutVendorInputObjectSchema)])
}).strict();
export const VendorCustomersCreateOrConnectWithoutVendorInputObjectSchema = makeSchema();
export const VendorCustomersCreateOrConnectWithoutVendorInputObjectZodSchema = makeSchema();
