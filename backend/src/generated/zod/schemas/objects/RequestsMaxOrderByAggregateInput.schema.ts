import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  vendorCustomerId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  start_date: SortOrderSchema.optional(),
  end_date: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  respondedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const RequestsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RequestsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsMaxOrderByAggregateInput>;
export const RequestsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
