import { z } from 'zod';
import { CustomerSubscriptionUpdateManyMutationInputSchema } from '../inputTypeSchemas/CustomerSubscriptionUpdateManyMutationInputSchema';
import { CustomerSubscriptionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CustomerSubscriptionUncheckedUpdateManyInputSchema';
import { CustomerSubscriptionWhereInputSchema } from '../inputTypeSchemas/CustomerSubscriptionWhereInputSchema';
export const CustomerSubscriptionUpdateManyAndReturnArgsSchema = z.object({
    data: z.union([CustomerSubscriptionUpdateManyMutationInputSchema, CustomerSubscriptionUncheckedUpdateManyInputSchema]),
    where: CustomerSubscriptionWhereInputSchema.optional(),
    limit: z.number().optional(),
}).strict();
export default CustomerSubscriptionUpdateManyAndReturnArgsSchema;
