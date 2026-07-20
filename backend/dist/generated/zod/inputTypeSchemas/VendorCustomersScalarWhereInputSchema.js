import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
export const VendorCustomersScalarWhereInputSchema = z.strictObject({
    AND: z.union([z.lazy(() => VendorCustomersScalarWhereInputSchema), z.lazy(() => VendorCustomersScalarWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => VendorCustomersScalarWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => VendorCustomersScalarWhereInputSchema), z.lazy(() => VendorCustomersScalarWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    vendorId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    customerId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    customerPhone: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
});
export default VendorCustomersScalarWhereInputSchema;
