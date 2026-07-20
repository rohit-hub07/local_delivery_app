import { z } from 'zod';
import { RequestsWhereInputSchema } from './RequestsWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumStatusFilterSchema } from './EnumStatusFilterSchema';
import { StatusSchema } from './StatusSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { VendorCustomersScalarRelationFilterSchema } from './VendorCustomersScalarRelationFilterSchema';
import { VendorCustomersWhereInputSchema } from './VendorCustomersWhereInputSchema';
import { ProductScalarRelationFilterSchema } from './ProductScalarRelationFilterSchema';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
export const RequestsWhereUniqueInputSchema = z.object({
    id: z.uuid(),
})
    .and(z.strictObject({
    id: z.uuid().optional(),
    AND: z.union([z.lazy(() => RequestsWhereInputSchema), z.lazy(() => RequestsWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => RequestsWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => RequestsWhereInputSchema), z.lazy(() => RequestsWhereInputSchema).array()]).optional(),
    vendorCustomerId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    productId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    message: z.union([z.lazy(() => StringFilterSchema), z.string().min(2, { message: "Message should be at least 2 of 2 characters" })]).optional(),
    start_date: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    end_date: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    status: z.union([z.lazy(() => EnumStatusFilterSchema), z.lazy(() => StatusSchema)]).optional(),
    respondedAt: z.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()]).optional().nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    vendorCustomers: z.union([z.lazy(() => VendorCustomersScalarRelationFilterSchema), z.lazy(() => VendorCustomersWhereInputSchema)]).optional(),
    product: z.union([z.lazy(() => ProductScalarRelationFilterSchema), z.lazy(() => ProductWhereInputSchema)]).optional(),
}));
export default RequestsWhereUniqueInputSchema;
