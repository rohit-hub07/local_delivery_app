import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { CustomerSubscriptionCreateManyInputSchema } from '../inputTypeSchemas/CustomerSubscriptionCreateManyInputSchema'

export const CustomerSubscriptionCreateManyArgsSchema: z.ZodType<Prisma.CustomerSubscriptionCreateManyArgs> = z.object({
  data: z.union([ CustomerSubscriptionCreateManyInputSchema, CustomerSubscriptionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default CustomerSubscriptionCreateManyArgsSchema;
