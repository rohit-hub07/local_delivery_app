import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { CustomerSubscriptionWhereInputSchema } from '../inputTypeSchemas/CustomerSubscriptionWhereInputSchema'
import { CustomerSubscriptionOrderByWithRelationInputSchema } from '../inputTypeSchemas/CustomerSubscriptionOrderByWithRelationInputSchema'
import { CustomerSubscriptionWhereUniqueInputSchema } from '../inputTypeSchemas/CustomerSubscriptionWhereUniqueInputSchema'

export const CustomerSubscriptionAggregateArgsSchema: z.ZodType<Prisma.CustomerSubscriptionAggregateArgs> = z.object({
  where: CustomerSubscriptionWhereInputSchema.optional(), 
  orderBy: z.union([ CustomerSubscriptionOrderByWithRelationInputSchema.array(), CustomerSubscriptionOrderByWithRelationInputSchema ]).optional(),
  cursor: CustomerSubscriptionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default CustomerSubscriptionAggregateArgsSchema;
