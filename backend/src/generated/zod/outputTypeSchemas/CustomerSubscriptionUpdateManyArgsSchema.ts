import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { CustomerSubscriptionUpdateManyMutationInputSchema } from '../inputTypeSchemas/CustomerSubscriptionUpdateManyMutationInputSchema'
import { CustomerSubscriptionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CustomerSubscriptionUncheckedUpdateManyInputSchema'
import { CustomerSubscriptionWhereInputSchema } from '../inputTypeSchemas/CustomerSubscriptionWhereInputSchema'

export const CustomerSubscriptionUpdateManyArgsSchema: z.ZodType<Prisma.CustomerSubscriptionUpdateManyArgs> = z.object({
  data: z.union([ CustomerSubscriptionUpdateManyMutationInputSchema, CustomerSubscriptionUncheckedUpdateManyInputSchema ]),
  where: CustomerSubscriptionWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default CustomerSubscriptionUpdateManyArgsSchema;
