import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  vendorCustomerId: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  type: z.literal(true).optional(),
  message: z.literal(true).optional(),
  start_date: z.literal(true).optional(),
  end_date: z.literal(true).optional(),
  status: z.literal(true).optional(),
  respondedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const RequestsCountAggregateInputObjectSchema: z.ZodType<Prisma.RequestsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RequestsCountAggregateInputType>;
export const RequestsCountAggregateInputObjectZodSchema = makeSchema();
