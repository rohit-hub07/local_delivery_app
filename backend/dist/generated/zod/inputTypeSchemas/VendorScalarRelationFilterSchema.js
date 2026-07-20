import { z } from 'zod';
import { VendorWhereInputSchema } from './VendorWhereInputSchema';
export const VendorScalarRelationFilterSchema = z.strictObject({
    is: z.lazy(() => VendorWhereInputSchema).optional(),
    isNot: z.lazy(() => VendorWhereInputSchema).optional(),
});
export default VendorScalarRelationFilterSchema;
