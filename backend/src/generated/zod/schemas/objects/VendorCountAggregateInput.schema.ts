import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  businessName: z.literal(true).optional(),
  businessPhone: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const VendorCountAggregateInputObjectSchema: z.ZodType<Prisma.VendorCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VendorCountAggregateInputType>;
export const VendorCountAggregateInputObjectZodSchema = makeSchema();
