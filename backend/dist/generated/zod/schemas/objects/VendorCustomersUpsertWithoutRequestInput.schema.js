import * as z from 'zod';
import { VendorCustomersUpdateWithoutRequestInputObjectSchema as VendorCustomersUpdateWithoutRequestInputObjectSchema } from './VendorCustomersUpdateWithoutRequestInput.schema';
import { VendorCustomersUncheckedUpdateWithoutRequestInputObjectSchema as VendorCustomersUncheckedUpdateWithoutRequestInputObjectSchema } from './VendorCustomersUncheckedUpdateWithoutRequestInput.schema';
import { VendorCustomersCreateWithoutRequestInputObjectSchema as VendorCustomersCreateWithoutRequestInputObjectSchema } from './VendorCustomersCreateWithoutRequestInput.schema';
import { VendorCustomersUncheckedCreateWithoutRequestInputObjectSchema as VendorCustomersUncheckedCreateWithoutRequestInputObjectSchema } from './VendorCustomersUncheckedCreateWithoutRequestInput.schema';
import { VendorCustomersWhereInputObjectSchema as VendorCustomersWhereInputObjectSchema } from './VendorCustomersWhereInput.schema';
const makeSchema = () => z.object({
    update: z.union([z.lazy(() => VendorCustomersUpdateWithoutRequestInputObjectSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutRequestInputObjectSchema)]),
    create: z.union([z.lazy(() => VendorCustomersCreateWithoutRequestInputObjectSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutRequestInputObjectSchema)]),
    where: z.lazy(() => VendorCustomersWhereInputObjectSchema).optional()
}).strict();
export const VendorCustomersUpsertWithoutRequestInputObjectSchema = makeSchema();
export const VendorCustomersUpsertWithoutRequestInputObjectZodSchema = makeSchema();
