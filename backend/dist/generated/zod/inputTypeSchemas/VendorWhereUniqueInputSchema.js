import { z } from 'zod';
import { VendorWhereInputSchema } from './VendorWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { ProductListRelationFilterSchema } from './ProductListRelationFilterSchema';
import { VendorCustomersListRelationFilterSchema } from './VendorCustomersListRelationFilterSchema';
export const VendorWhereUniqueInputSchema = z.union([
    z.object({
        id: z.uuid(),
        userId: z.string(),
    }),
    z.object({
        id: z.uuid(),
    }),
    z.object({
        userId: z.string(),
    }),
])
    .and(z.strictObject({
    id: z.uuid().optional(),
    userId: z.string().optional(),
    AND: z.union([z.lazy(() => VendorWhereInputSchema), z.lazy(() => VendorWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => VendorWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => VendorWhereInputSchema), z.lazy(() => VendorWhereInputSchema).array()]).optional(),
    businessName: z.union([z.lazy(() => StringFilterSchema), z.string().min(2, { message: "Business name must be at least 2 characters long" })]).optional(),
    businessPhone: z.union([z.lazy(() => StringFilterSchema), z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" })]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    user: z.union([z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional(),
    product: z.lazy(() => ProductListRelationFilterSchema).optional(),
    vendorcustomers: z.lazy(() => VendorCustomersListRelationFilterSchema).optional(),
}));
export default VendorWhereUniqueInputSchema;
