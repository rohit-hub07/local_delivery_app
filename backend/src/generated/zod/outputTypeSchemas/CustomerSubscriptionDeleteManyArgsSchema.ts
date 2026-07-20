import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { CustomerSubscriptionWhereInputSchema } from '../inputTypeSchemas/CustomerSubscriptionWhereInputSchema'

export const CustomerSubscriptionDeleteManyArgsSchema: z.ZodType<Prisma.CustomerSubscriptionDeleteManyArgs> = z.object({
  where: CustomerSubscriptionWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default CustomerSubscriptionDeleteManyArgsSchema;
