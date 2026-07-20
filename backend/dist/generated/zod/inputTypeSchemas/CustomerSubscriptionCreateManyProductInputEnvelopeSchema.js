import { z } from 'zod';
import { CustomerSubscriptionCreateManyProductInputSchema } from './CustomerSubscriptionCreateManyProductInputSchema';
export const CustomerSubscriptionCreateManyProductInputEnvelopeSchema = z.strictObject({
    data: z.union([z.lazy(() => CustomerSubscriptionCreateManyProductInputSchema), z.lazy(() => CustomerSubscriptionCreateManyProductInputSchema).array()]),
    skipDuplicates: z.boolean().optional(),
});
export default CustomerSubscriptionCreateManyProductInputEnvelopeSchema;
