import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  vendorId: z.literal(true).optional(),
  customerId: z.literal(true).optional(),
  customerPhone: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const VendorCustomersMaxAggregateInputObjectSchema: z.ZodType<Prisma.VendorCustomersMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersMaxAggregateInputType>;
export const VendorCustomersMaxAggregateInputObjectZodSchema = makeSchema();
