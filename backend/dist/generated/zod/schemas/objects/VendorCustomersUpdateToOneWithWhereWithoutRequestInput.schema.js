import * as z from 'zod';
import { VendorCustomersWhereInputObjectSchema as VendorCustomersWhereInputObjectSchema } from './VendorCustomersWhereInput.schema';
import { VendorCustomersUpdateWithoutRequestInputObjectSchema as VendorCustomersUpdateWithoutRequestInputObjectSchema } from './VendorCustomersUpdateWithoutRequestInput.schema';
import { VendorCustomersUncheckedUpdateWithoutRequestInputObjectSchema as VendorCustomersUncheckedUpdateWithoutRequestInputObjectSchema } from './VendorCustomersUncheckedUpdateWithoutRequestInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => VendorCustomersWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => VendorCustomersUpdateWithoutRequestInputObjectSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutRequestInputObjectSchema)])
}).strict();
export const VendorCustomersUpdateToOneWithWhereWithoutRequestInputObjectSchema = makeSchema();
export const VendorCustomersUpdateToOneWithWhereWithoutRequestInputObjectZodSchema = makeSchema();
