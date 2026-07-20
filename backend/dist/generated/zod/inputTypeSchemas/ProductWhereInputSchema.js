import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { VendorScalarRelationFilterSchema } from './VendorScalarRelationFilterSchema';
import { VendorWhereInputSchema } from './VendorWhereInputSchema';
import { CustomerSubscriptionListRelationFilterSchema } from './CustomerSubscriptionListRelationFilterSchema';
import { RequestsListRelationFilterSchema } from './RequestsListRelationFilterSchema';
export const ProductWhereInputSchema = z.strictObject({
    AND: z.union([z.lazy(() => ProductWhereInputSchema), z.lazy(() => ProductWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => ProductWhereInputSchema), z.lazy(() => ProductWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    vendorId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    productName: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    vendor: z.union([z.lazy(() => VendorScalarRelationFilterSchema), z.lazy(() => VendorWhereInputSchema)]).optional(),
    subscription: z.lazy(() => CustomerSubscriptionListRelationFilterSchema).optional(),
    request: z.lazy(() => RequestsListRelationFilterSchema).optional(),
});
export default ProductWhereInputSchema;
