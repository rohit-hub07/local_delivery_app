import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
export const RequestsOrderByRelationAggregateInputSchema = z.strictObject({
    _count: z.lazy(() => SortOrderSchema).optional(),
});
export default RequestsOrderByRelationAggregateInputSchema;
