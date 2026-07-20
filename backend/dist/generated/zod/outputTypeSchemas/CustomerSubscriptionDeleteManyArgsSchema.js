import { z } from 'zod';
import { CustomerSubscriptionWhereInputSchema } from '../inputTypeSchemas/CustomerSubscriptionWhereInputSchema';
export const CustomerSubscriptionDeleteManyArgsSchema = z.object({
    where: CustomerSubscriptionWhereInputSchema.optional(),
    limit: z.number().optional(),
}).strict();
export default CustomerSubscriptionDeleteManyArgsSchema;
