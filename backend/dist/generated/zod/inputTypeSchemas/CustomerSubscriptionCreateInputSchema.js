import { z } from 'zod';
import { VendorCustomersCreateNestedOneWithoutSubscriptionInputSchema } from './VendorCustomersCreateNestedOneWithoutSubscriptionInputSchema';
import { ProductCreateNestedOneWithoutSubscriptionInputSchema } from './ProductCreateNestedOneWithoutSubscriptionInputSchema';
export const CustomerSubscriptionCreateInputSchema = z.strictObject({
    id: z.uuid().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    vendorCustomers: z.lazy(() => VendorCustomersCreateNestedOneWithoutSubscriptionInputSchema),
    product: z.lazy(() => ProductCreateNestedOneWithoutSubscriptionInputSchema),
});
export default CustomerSubscriptionCreateInputSchema;
