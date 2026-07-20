import { z } from 'zod';
import { CustomerSubscriptionWhereUniqueInputSchema } from './CustomerSubscriptionWhereUniqueInputSchema';
import { CustomerSubscriptionUpdateWithoutVendorCustomersInputSchema } from './CustomerSubscriptionUpdateWithoutVendorCustomersInputSchema';
import { CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInputSchema } from './CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInputSchema';
import { CustomerSubscriptionCreateWithoutVendorCustomersInputSchema } from './CustomerSubscriptionCreateWithoutVendorCustomersInputSchema';
import { CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputSchema } from './CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputSchema';
export const CustomerSubscriptionUpsertWithWhereUniqueWithoutVendorCustomersInputSchema = z.strictObject({
    where: z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema),
    update: z.union([z.lazy(() => CustomerSubscriptionUpdateWithoutVendorCustomersInputSchema), z.lazy(() => CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInputSchema)]),
    create: z.union([z.lazy(() => CustomerSubscriptionCreateWithoutVendorCustomersInputSchema), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputSchema)]),
});
export default CustomerSubscriptionUpsertWithWhereUniqueWithoutVendorCustomersInputSchema;
