import * as z from 'zod';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { VendorScalarRelationFilterObjectSchema as VendorScalarRelationFilterObjectSchema } from './VendorScalarRelationFilter.schema';
import { VendorWhereInputObjectSchema as VendorWhereInputObjectSchema } from './VendorWhereInput.schema';
import { CustomerSubscriptionListRelationFilterObjectSchema as CustomerSubscriptionListRelationFilterObjectSchema } from './CustomerSubscriptionListRelationFilter.schema';
import { RequestsListRelationFilterObjectSchema as RequestsListRelationFilterObjectSchema } from './RequestsListRelationFilter.schema';
const productwhereinputSchema = z.object({
    AND: z.union([z.lazy(() => ProductWhereInputObjectSchema), z.lazy(() => ProductWhereInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => ProductWhereInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => ProductWhereInputObjectSchema), z.lazy(() => ProductWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    vendorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    productName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    vendor: z.union([z.lazy(() => VendorScalarRelationFilterObjectSchema), z.lazy(() => VendorWhereInputObjectSchema)]).optional(),
    subscription: z.lazy(() => CustomerSubscriptionListRelationFilterObjectSchema).optional(),
    request: z.lazy(() => RequestsListRelationFilterObjectSchema).optional()
}).strict();
export const ProductWhereInputObjectSchema = productwhereinputSchema;
export const ProductWhereInputObjectZodSchema = productwhereinputSchema;
