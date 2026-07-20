import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  vendorId: z.literal(true).optional(),
  productName: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ProductCountAggregateInputObjectSchema: z.ZodType<Prisma.ProductCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductCountAggregateInputType>;
export const ProductCountAggregateInputObjectZodSchema = makeSchema();
