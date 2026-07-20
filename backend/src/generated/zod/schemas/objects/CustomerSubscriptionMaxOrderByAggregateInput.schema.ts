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
export const CustomerSubscriptionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionMaxOrderByAggregateInput>;
export const CustomerSubscriptionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
