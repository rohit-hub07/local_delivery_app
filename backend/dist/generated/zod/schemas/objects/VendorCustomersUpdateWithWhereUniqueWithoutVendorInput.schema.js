import * as z from 'zod';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './VendorCustomersWhereUniqueInput.schema';
import { VendorCustomersUpdateWithoutVendorInputObjectSchema as VendorCustomersUpdateWithoutVendorInputObjectSchema } from './VendorCustomersUpdateWithoutVendorInput.schema';
import { VendorCustomersUncheckedUpdateWithoutVendorInputObjectSchema as VendorCustomersUncheckedUpdateWithoutVendorInputObjectSchema } from './VendorCustomersUncheckedUpdateWithoutVendorInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => VendorCustomersUpdateWithoutVendorInputObjectSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutVendorInputObjectSchema)])
}).strict();
export const VendorCustomersUpdateWithWhereUniqueWithoutVendorInputObjectSchema = makeSchema();
export const VendorCustomersUpdateWithWhereUniqueWithoutVendorInputObjectZodSchema = makeSchema();
