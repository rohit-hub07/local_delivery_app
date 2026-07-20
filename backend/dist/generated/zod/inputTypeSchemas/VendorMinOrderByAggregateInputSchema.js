import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
export const VendorMinOrderByAggregateInputSchema = z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    businessName: z.lazy(() => SortOrderSchema).optional(),
    businessPhone: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
});
export default VendorMinOrderByAggregateInputSchema;
