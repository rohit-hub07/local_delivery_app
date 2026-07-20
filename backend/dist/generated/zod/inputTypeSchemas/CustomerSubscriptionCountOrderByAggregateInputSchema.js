import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
export const CustomerSubscriptionCountOrderByAggregateInputSchema = z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    vendorCustomerId: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
});
export default CustomerSubscriptionCountOrderByAggregateInputSchema;
