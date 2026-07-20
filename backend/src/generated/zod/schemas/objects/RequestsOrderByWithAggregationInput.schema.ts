import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RequestsCountOrderByAggregateInputObjectSchema as RequestsCountOrderByAggregateInputObjectSchema } from './RequestsCountOrderByAggregateInput.schema';
import { RequestsMaxOrderByAggregateInputObjectSchema as RequestsMaxOrderByAggregateInputObjectSchema } from './RequestsMaxOrderByAggregateInput.schema';
import { RequestsMinOrderByAggregateInputObjectSchema as RequestsMinOrderByAggregateInputObjectSchema } from './RequestsMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  vendorCustomerId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  start_date: SortOrderSchema.optional(),
  end_date: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  respondedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => RequestsCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RequestsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RequestsMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RequestsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RequestsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsOrderByWithAggregationInput>;
export const RequestsOrderByWithAggregationInputObjectZodSchema = makeSchema();
