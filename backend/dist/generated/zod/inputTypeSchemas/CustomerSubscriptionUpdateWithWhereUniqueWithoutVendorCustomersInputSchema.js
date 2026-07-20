import { z } from 'zod';
import { CustomerSubscriptionWhereUniqueInputSchema } from './CustomerSubscriptionWhereUniqueInputSchema';
import { CustomerSubscriptionUpdateWithoutVendorCustomersInputSchema } from './CustomerSubscriptionUpdateWithoutVendorCustomersInputSchema';
import { CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInputSchema } from './CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInputSchema';
export const CustomerSubscriptionUpdateWithWhereUniqueWithoutVendorCustomersInputSchema = z.strictObject({
    where: z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema),
    data: z.union([z.lazy(() => CustomerSubscriptionUpdateWithoutVendorCustomersInputSchema), z.lazy(() => CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInputSchema)]),
});
export default CustomerSubscriptionUpdateWithWhereUniqueWithoutVendorCustomersInputSchema;
