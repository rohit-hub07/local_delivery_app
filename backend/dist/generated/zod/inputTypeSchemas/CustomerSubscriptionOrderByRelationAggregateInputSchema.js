import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
export const CustomerSubscriptionOrderByRelationAggregateInputSchema = z.strictObject({
    _count: z.lazy(() => SortOrderSchema).optional(),
});
export default CustomerSubscriptionOrderByRelationAggregateInputSchema;
