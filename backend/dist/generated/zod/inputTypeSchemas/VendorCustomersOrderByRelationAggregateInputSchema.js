import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
export const VendorCustomersOrderByRelationAggregateInputSchema = z.strictObject({
    _count: z.lazy(() => SortOrderSchema).optional(),
});
export default VendorCustomersOrderByRelationAggregateInputSchema;
