import { z } from 'zod';
import { VendorCustomersWhereInputSchema } from './VendorCustomersWhereInputSchema';
export const VendorCustomersListRelationFilterSchema = z.strictObject({
    every: z.lazy(() => VendorCustomersWhereInputSchema).optional(),
    some: z.lazy(() => VendorCustomersWhereInputSchema).optional(),
    none: z.lazy(() => VendorCustomersWhereInputSchema).optional(),
});
export default VendorCustomersListRelationFilterSchema;
