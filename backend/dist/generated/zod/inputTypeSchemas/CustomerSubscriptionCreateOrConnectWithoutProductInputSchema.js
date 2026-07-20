import { z } from 'zod';
import { CustomerSubscriptionWhereUniqueInputSchema } from './CustomerSubscriptionWhereUniqueInputSchema';
import { CustomerSubscriptionCreateWithoutProductInputSchema } from './CustomerSubscriptionCreateWithoutProductInputSchema';
import { CustomerSubscriptionUncheckedCreateWithoutProductInputSchema } from './CustomerSubscriptionUncheckedCreateWithoutProductInputSchema';
export const CustomerSubscriptionCreateOrConnectWithoutProductInputSchema = z.strictObject({
    where: z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema),
    create: z.union([z.lazy(() => CustomerSubscriptionCreateWithoutProductInputSchema), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutProductInputSchema)]),
});
export default CustomerSubscriptionCreateOrConnectWithoutProductInputSchema;
