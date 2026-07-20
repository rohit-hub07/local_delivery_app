import * as z from 'zod';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './VendorCustomersWhereUniqueInput.schema';
import { VendorCustomersCreateWithoutRequestInputObjectSchema as VendorCustomersCreateWithoutRequestInputObjectSchema } from './VendorCustomersCreateWithoutRequestInput.schema';
import { VendorCustomersUncheckedCreateWithoutRequestInputObjectSchema as VendorCustomersUncheckedCreateWithoutRequestInputObjectSchema } from './VendorCustomersUncheckedCreateWithoutRequestInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => VendorCustomersCreateWithoutRequestInputObjectSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutRequestInputObjectSchema)])
}).strict();
export const VendorCustomersCreateOrConnectWithoutRequestInputObjectSchema = makeSchema();
export const VendorCustomersCreateOrConnectWithoutRequestInputObjectZodSchema = makeSchema();
