import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  vendorId: z.literal(true).optional(),
  customerId: z.literal(true).optional(),
  customerPhone: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const VendorCustomersCountAggregateInputObjectSchema: z.ZodType<Prisma.VendorCustomersCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersCountAggregateInputType>;
export const VendorCustomersCountAggregateInputObjectZodSchema = makeSchema();
