import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { CustomerSubscriptionCreateManyInputSchema } from '../inputTypeSchemas/CustomerSubscriptionCreateManyInputSchema'

export const CustomerSubscriptionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CustomerSubscriptionCreateManyAndReturnArgs> = z.object({
  data: z.union([ CustomerSubscriptionCreateManyInputSchema, CustomerSubscriptionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default CustomerSubscriptionCreateManyAndReturnArgsSchema;
