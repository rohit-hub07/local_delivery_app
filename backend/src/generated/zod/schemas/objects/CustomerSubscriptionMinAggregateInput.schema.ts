import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  vendorCustomerId: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const CustomerSubscriptionMinAggregateInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionMinAggregateInputType>;
export const CustomerSubscriptionMinAggregateInputObjectZodSchema = makeSchema();
