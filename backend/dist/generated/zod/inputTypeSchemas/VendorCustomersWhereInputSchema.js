import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { VendorScalarRelationFilterSchema } from './VendorScalarRelationFilterSchema';
import { VendorWhereInputSchema } from './VendorWhereInputSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { CustomerSubscriptionListRelationFilterSchema } from './CustomerSubscriptionListRelationFilterSchema';
import { RequestsListRelationFilterSchema } from './RequestsListRelationFilterSchema';
export const VendorCustomersWhereInputSchema = z.strictObject({
    AND: z.union([z.lazy(() => VendorCustomersWhereInputSchema), z.lazy(() => VendorCustomersWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => VendorCustomersWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => VendorCustomersWhereInputSchema), z.lazy(() => VendorCustomersWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    vendorId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    customerId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    customerPhone: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    vendor: z.union([z.lazy(() => VendorScalarRelationFilterSchema), z.lazy(() => VendorWhereInputSchema)]).optional(),
    user: z.union([z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional(),
    subscription: z.lazy(() => CustomerSubscriptionListRelationFilterSchema).optional(),
    request: z.lazy(() => RequestsListRelationFilterSchema).optional(),
});
export default VendorCustomersWhereInputSchema;
