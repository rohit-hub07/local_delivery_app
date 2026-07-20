import { z } from 'zod';
import { CustomerSubscriptionSelectSchema } from '../inputTypeSchemas/CustomerSubscriptionSelectSchema';
import { CustomerSubscriptionIncludeSchema } from '../inputTypeSchemas/CustomerSubscriptionIncludeSchema';
export const CustomerSubscriptionArgsSchema = z.object({
    select: z.lazy(() => CustomerSubscriptionSelectSchema).optional(),
    include: z.lazy(() => CustomerSubscriptionIncludeSchema).optional(),
}).strict();
export default CustomerSubscriptionArgsSchema;
