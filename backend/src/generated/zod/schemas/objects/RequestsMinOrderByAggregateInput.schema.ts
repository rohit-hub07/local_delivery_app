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
export const RequestsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RequestsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsMinOrderByAggregateInput>;
export const RequestsMinOrderByAggregateInputObjectZodSchema = makeSchema();
