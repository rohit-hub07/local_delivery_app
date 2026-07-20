import * as z from 'zod';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ProductListRelationFilterObjectSchema as ProductListRelationFilterObjectSchema } from './ProductListRelationFilter.schema';
import { VendorCustomersListRelationFilterObjectSchema as VendorCustomersListRelationFilterObjectSchema } from './VendorCustomersListRelationFilter.schema';
const vendorwhereinputSchema = z.object({
    AND: z.union([z.lazy(() => VendorWhereInputObjectSchema), z.lazy(() => VendorWhereInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => VendorWhereInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => VendorWhereInputObjectSchema), z.lazy(() => VendorWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    businessName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    businessPhone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
    product: z.lazy(() => ProductListRelationFilterObjectSchema).optional(),
    vendorcustomers: z.lazy(() => VendorCustomersListRelationFilterObjectSchema).optional()
}).strict();
export const VendorWhereInputObjectSchema = vendorwhereinputSchema;
export const VendorWhereInputObjectZodSchema = vendorwhereinputSchema;
