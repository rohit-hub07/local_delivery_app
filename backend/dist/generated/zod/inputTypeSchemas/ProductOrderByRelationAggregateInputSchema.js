import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
export const ProductOrderByRelationAggregateInputSchema = z.strictObject({
    _count: z.lazy(() => SortOrderSchema).optional(),
});
export default ProductOrderByRelationAggregateInputSchema;
