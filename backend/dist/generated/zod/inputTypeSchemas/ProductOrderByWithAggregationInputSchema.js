import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ProductCountOrderByAggregateInputSchema } from './ProductCountOrderByAggregateInputSchema';
import { ProductMaxOrderByAggregateInputSchema } from './ProductMaxOrderByAggregateInputSchema';
import { ProductMinOrderByAggregateInputSchema } from './ProductMinOrderByAggregateInputSchema';
export const ProductOrderByWithAggregationInputSchema = z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    vendorId: z.lazy(() => SortOrderSchema).optional(),
    productName: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ProductCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => ProductMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => ProductMinOrderByAggregateInputSchema).optional(),
});
export default ProductOrderByWithAggregationInputSchema;
