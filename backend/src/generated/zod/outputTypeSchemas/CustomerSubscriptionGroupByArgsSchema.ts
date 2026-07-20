import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { CustomerSubscriptionWhereInputSchema } from '../inputTypeSchemas/CustomerSubscriptionWhereInputSchema'
import { CustomerSubscriptionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CustomerSubscriptionOrderByWithAggregationInputSchema'
import { CustomerSubscriptionScalarFieldEnumSchema } from '../inputTypeSchemas/CustomerSubscriptionScalarFieldEnumSchema'
import { CustomerSubscriptionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CustomerSubscriptionScalarWhereWithAggregatesInputSchema'

export const CustomerSubscriptionGroupByArgsSchema: z.ZodType<Prisma.CustomerSubscriptionGroupByArgs> = z.object({
  where: CustomerSubscriptionWhereInputSchema.optional(), 
  orderBy: z.union([ CustomerSubscriptionOrderByWithAggregationInputSchema.array(), CustomerSubscriptionOrderByWithAggregationInputSchema ]).optional(),
  by: CustomerSubscriptionScalarFieldEnumSchema.array(), 
  having: CustomerSubscriptionScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default CustomerSubscriptionGroupByArgsSchema;
