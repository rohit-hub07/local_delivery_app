import { z } from 'zod';
import { VendorCustomersCreateNestedOneWithoutSubscriptionInputSchema } from './VendorCustomersCreateNestedOneWithoutSubscriptionInputSchema';
export const CustomerSubscriptionCreateWithoutProductInputSchema = z.strictObject({
    id: z.uuid().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    vendorCustomers: z.lazy(() => VendorCustomersCreateNestedOneWithoutSubscriptionInputSchema),
});
export default CustomerSubscriptionCreateWithoutProductInputSchema;
