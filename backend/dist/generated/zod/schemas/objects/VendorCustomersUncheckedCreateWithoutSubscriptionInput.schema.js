import * as z from 'zod';
import { RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema as RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema } from './RequestsUncheckedCreateNestedManyWithoutVendorCustomersInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    vendorId: z.string(),
    customerId: z.string(),
    customerPhone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    request: z.lazy(() => RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema).optional()
}).strict();
export const VendorCustomersUncheckedCreateWithoutSubscriptionInputObjectSchema = makeSchema();
export const VendorCustomersUncheckedCreateWithoutSubscriptionInputObjectZodSchema = makeSchema();
