import { z } from 'zod';
import { VendorCustomersWhereInputSchema } from './VendorCustomersWhereInputSchema';
export const VendorCustomersScalarRelationFilterSchema = z.strictObject({
    is: z.lazy(() => VendorCustomersWhereInputSchema).optional(),
    isNot: z.lazy(() => VendorCustomersWhereInputSchema).optional(),
});
export default VendorCustomersScalarRelationFilterSchema;
