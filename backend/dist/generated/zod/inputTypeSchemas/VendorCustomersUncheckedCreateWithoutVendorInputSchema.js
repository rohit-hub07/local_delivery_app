import { z } from 'zod';
import { CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputSchema } from './CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputSchema';
import { RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputSchema } from './RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputSchema';
export const VendorCustomersUncheckedCreateWithoutVendorInputSchema = z.strictObject({
    id: z.uuid().optional(),
    customerId: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
    customerPhone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    subscription: z.lazy(() => CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputSchema).optional(),
    request: z.lazy(() => RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputSchema).optional(),
});
export default VendorCustomersUncheckedCreateWithoutVendorInputSchema;
