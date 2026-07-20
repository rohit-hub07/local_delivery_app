import * as z from 'zod';
import { VendorCustomersUncheckedCreateNestedManyWithoutVendorInputObjectSchema as VendorCustomersUncheckedCreateNestedManyWithoutVendorInputObjectSchema } from './VendorCustomersUncheckedCreateNestedManyWithoutVendorInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    userId: z.string(),
    businessName: z.string(),
    businessPhone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    vendorcustomers: z.lazy(() => VendorCustomersUncheckedCreateNestedManyWithoutVendorInputObjectSchema).optional()
}).strict();
export const VendorUncheckedCreateWithoutProductInputObjectSchema = makeSchema();
export const VendorUncheckedCreateWithoutProductInputObjectZodSchema = makeSchema();
