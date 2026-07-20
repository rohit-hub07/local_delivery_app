import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CustomerSubscriptionCountOrderByAggregateInputObjectSchema as CustomerSubscriptionCountOrderByAggregateInputObjectSchema } from './CustomerSubscriptionCountOrderByAggregateInput.schema';
import { CustomerSubscriptionMaxOrderByAggregateInputObjectSchema as CustomerSubscriptionMaxOrderByAggregateInputObjectSchema } from './CustomerSubscriptionMaxOrderByAggregateInput.schema';
import { CustomerSubscriptionMinOrderByAggregateInputObjectSchema as CustomerSubscriptionMinOrderByAggregateInputObjectSchema } from './CustomerSubscriptionMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  vendorCustomerId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CustomerSubscriptionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CustomerSubscriptionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CustomerSubscriptionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CustomerSubscriptionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionOrderByWithAggregationInput>;
export const CustomerSubscriptionOrderByWithAggregationInputObjectZodSchema = makeSchema();
