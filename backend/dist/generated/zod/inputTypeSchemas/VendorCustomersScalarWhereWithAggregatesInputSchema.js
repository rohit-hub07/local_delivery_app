import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
export const VendorCustomersScalarWhereWithAggregatesInputSchema = z.strictObject({
    AND: z.union([z.lazy(() => VendorCustomersScalarWhereWithAggregatesInputSchema), z.lazy(() => VendorCustomersScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: z.lazy(() => VendorCustomersScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => VendorCustomersScalarWhereWithAggregatesInputSchema), z.lazy(() => VendorCustomersScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    vendorId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    customerId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    customerPhone: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
});
export default VendorCustomersScalarWhereWithAggregatesInputSchema;
