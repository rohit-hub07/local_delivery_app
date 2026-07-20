import { z } from 'zod';
import { VendorCustomersWhereUniqueInputSchema } from './VendorCustomersWhereUniqueInputSchema';
import { VendorCustomersCreateWithoutSubscriptionInputSchema } from './VendorCustomersCreateWithoutSubscriptionInputSchema';
import { VendorCustomersUncheckedCreateWithoutSubscriptionInputSchema } from './VendorCustomersUncheckedCreateWithoutSubscriptionInputSchema';
export const VendorCustomersCreateOrConnectWithoutSubscriptionInputSchema = z.strictObject({
    where: z.lazy(() => VendorCustomersWhereUniqueInputSchema),
    create: z.union([z.lazy(() => VendorCustomersCreateWithoutSubscriptionInputSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutSubscriptionInputSchema)]),
});
export default VendorCustomersCreateOrConnectWithoutSubscriptionInputSchema;
