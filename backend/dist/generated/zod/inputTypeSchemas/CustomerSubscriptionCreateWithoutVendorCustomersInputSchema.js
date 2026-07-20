import { z } from 'zod';
import { ProductCreateNestedOneWithoutSubscriptionInputSchema } from './ProductCreateNestedOneWithoutSubscriptionInputSchema';
export const CustomerSubscriptionCreateWithoutVendorCustomersInputSchema = z.strictObject({
    id: z.uuid().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    product: z.lazy(() => ProductCreateNestedOneWithoutSubscriptionInputSchema),
});
export default CustomerSubscriptionCreateWithoutVendorCustomersInputSchema;
