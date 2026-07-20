import { z } from 'zod';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { VendorScalarRelationFilterSchema } from './VendorScalarRelationFilterSchema';
import { VendorWhereInputSchema } from './VendorWhereInputSchema';
import { CustomerSubscriptionListRelationFilterSchema } from './CustomerSubscriptionListRelationFilterSchema';
import { RequestsListRelationFilterSchema } from './RequestsListRelationFilterSchema';
export const ProductWhereUniqueInputSchema = z.object({
    id: z.uuid(),
})
    .and(z.strictObject({
    id: z.uuid().optional(),
    AND: z.union([z.lazy(() => ProductWhereInputSchema), z.lazy(() => ProductWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => ProductWhereInputSchema), z.lazy(() => ProductWhereInputSchema).array()]).optional(),
    vendorId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    productName: z.union([z.lazy(() => StringFilterSchema), z.string().min(2, { message: "Product name must be of at least 2 characters" })]).optional(),
    description: z.union([z.lazy(() => StringFilterSchema), z.string().min(2, { message: "Product description must be of at leat 2 characters" })]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    vendor: z.union([z.lazy(() => VendorScalarRelationFilterSchema), z.lazy(() => VendorWhereInputSchema)]).optional(),
    subscription: z.lazy(() => CustomerSubscriptionListRelationFilterSchema).optional(),
    request: z.lazy(() => RequestsListRelationFilterSchema).optional(),
}));
export default ProductWhereUniqueInputSchema;
