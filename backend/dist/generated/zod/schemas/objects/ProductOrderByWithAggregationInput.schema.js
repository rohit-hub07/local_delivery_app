import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductCountOrderByAggregateInputObjectSchema as ProductCountOrderByAggregateInputObjectSchema } from './ProductCountOrderByAggregateInput.schema';
import { ProductMaxOrderByAggregateInputObjectSchema as ProductMaxOrderByAggregateInputObjectSchema } from './ProductMaxOrderByAggregateInput.schema';
import { ProductMinOrderByAggregateInputObjectSchema as ProductMinOrderByAggregateInputObjectSchema } from './ProductMinOrderByAggregateInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    vendorId: SortOrderSchema.optional(),
    productName: SortOrderSchema.optional(),
    description: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    _count: z.lazy(() => ProductCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ProductMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ProductMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProductOrderByWithAggregationInputObjectSchema = makeSchema();
export const ProductOrderByWithAggregationInputObjectZodSchema = makeSchema();
