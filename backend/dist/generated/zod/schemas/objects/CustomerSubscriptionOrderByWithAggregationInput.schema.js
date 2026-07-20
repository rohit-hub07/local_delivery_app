import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CustomerSubscriptionCountOrderByAggregateInputObjectSchema as CustomerSubscriptionCountOrderByAggregateInputObjectSchema } from './CustomerSubscriptionCountOrderByAggregateInput.schema';
import { CustomerSubscriptionMaxOrderByAggregateInputObjectSchema as CustomerSubscriptionMaxOrderByAggregateInputObjectSchema } from './CustomerSubscriptionMaxOrderByAggregateInput.schema';
import { CustomerSubscriptionMinOrderByAggregateInputObjectSchema as CustomerSubscriptionMinOrderByAggregateInputObjectSchema } from './CustomerSubscriptionMinOrderByAggregateInput.schema';
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
export const CustomerSubscriptionOrderByWithAggregationInputObjectSchema = makeSchema();
export const CustomerSubscriptionOrderByWithAggregationInputObjectZodSchema = makeSchema();
