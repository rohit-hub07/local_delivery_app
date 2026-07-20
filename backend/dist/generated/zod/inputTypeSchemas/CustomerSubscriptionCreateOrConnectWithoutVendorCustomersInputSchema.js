import { z } from 'zod';
import { CustomerSubscriptionWhereUniqueInputSchema } from './CustomerSubscriptionWhereUniqueInputSchema';
import { CustomerSubscriptionCreateWithoutVendorCustomersInputSchema } from './CustomerSubscriptionCreateWithoutVendorCustomersInputSchema';
import { CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputSchema } from './CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputSchema';
export const CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputSchema = z.strictObject({
    where: z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema),
    create: z.union([z.lazy(() => CustomerSubscriptionCreateWithoutVendorCustomersInputSchema), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputSchema)]),
});
export default CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputSchema;
