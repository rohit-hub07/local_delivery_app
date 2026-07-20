import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    vendorCustomerId: SortOrderSchema.optional(),
    productId: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const CustomerSubscriptionMaxOrderByAggregateInputObjectSchema = makeSchema();
export const CustomerSubscriptionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
