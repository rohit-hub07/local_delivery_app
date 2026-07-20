import { z } from 'zod';
import { CustomerSubscriptionScalarWhereInputSchema } from './CustomerSubscriptionScalarWhereInputSchema';
import { CustomerSubscriptionUpdateManyMutationInputSchema } from './CustomerSubscriptionUpdateManyMutationInputSchema';
import { CustomerSubscriptionUncheckedUpdateManyWithoutProductInputSchema } from './CustomerSubscriptionUncheckedUpdateManyWithoutProductInputSchema';
export const CustomerSubscriptionUpdateManyWithWhereWithoutProductInputSchema = z.strictObject({
    where: z.lazy(() => CustomerSubscriptionScalarWhereInputSchema),
    data: z.union([z.lazy(() => CustomerSubscriptionUpdateManyMutationInputSchema), z.lazy(() => CustomerSubscriptionUncheckedUpdateManyWithoutProductInputSchema)]),
});
export default CustomerSubscriptionUpdateManyWithWhereWithoutProductInputSchema;
