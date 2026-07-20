import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  vendorCustomerId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const CustomerSubscriptionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionMinOrderByAggregateInput>;
export const CustomerSubscriptionMinOrderByAggregateInputObjectZodSchema = makeSchema();
