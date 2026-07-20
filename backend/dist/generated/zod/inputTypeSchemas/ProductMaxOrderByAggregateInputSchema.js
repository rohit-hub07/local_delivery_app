import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
export const ProductMaxOrderByAggregateInputSchema = z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    vendorId: z.lazy(() => SortOrderSchema).optional(),
    productName: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
});
export default ProductMaxOrderByAggregateInputSchema;
