import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  vendorId: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional(),
  customerPhone: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const VendorCustomersMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VendorCustomersMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersMaxOrderByAggregateInput>;
export const VendorCustomersMaxOrderByAggregateInputObjectZodSchema = makeSchema();
