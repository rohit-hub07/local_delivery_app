import { z } from 'zod';
import { CustomerSubscriptionCreateManyInputSchema } from '../inputTypeSchemas/CustomerSubscriptionCreateManyInputSchema';
export const CustomerSubscriptionCreateManyAndReturnArgsSchema = z.object({
    data: z.union([CustomerSubscriptionCreateManyInputSchema, CustomerSubscriptionCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default CustomerSubscriptionCreateManyAndReturnArgsSchema;
