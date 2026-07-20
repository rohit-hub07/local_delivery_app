import { z } from 'zod';
import { RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputSchema } from './RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputSchema';
export const VendorCustomersUncheckedCreateWithoutSubscriptionInputSchema = z.strictObject({
    id: z.uuid().optional(),
    vendorId: z.string(),
    customerId: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
    customerPhone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    request: z.lazy(() => RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputSchema).optional(),
});
export default VendorCustomersUncheckedCreateWithoutSubscriptionInputSchema;
