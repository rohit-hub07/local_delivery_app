import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { NullsOrderSchema } from './NullsOrderSchema';
export const SortOrderInputSchema = z.strictObject({
    sort: z.lazy(() => SortOrderSchema),
    nulls: z.lazy(() => NullsOrderSchema).optional(),
});
export default SortOrderInputSchema;
