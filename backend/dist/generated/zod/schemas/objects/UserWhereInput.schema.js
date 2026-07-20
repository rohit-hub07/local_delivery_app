import * as z from 'zod';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumRoleFilterObjectSchema as EnumRoleFilterObjectSchema } from './EnumRoleFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { VendorNullableScalarRelationFilterObjectSchema as VendorNullableScalarRelationFilterObjectSchema } from './VendorNullableScalarRelationFilter.schema';
import { VendorWhereInputObjectSchema as VendorWhereInputObjectSchema } from './VendorWhereInput.schema';
import { VendorCustomersListRelationFilterObjectSchema as VendorCustomersListRelationFilterObjectSchema } from './VendorCustomersListRelationFilter.schema';
const userwhereinputSchema = z.object({
    AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    phone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    address: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    role: z.union([z.lazy(() => EnumRoleFilterObjectSchema), RoleSchema]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    vendor: z.union([z.lazy(() => VendorNullableScalarRelationFilterObjectSchema), z.lazy(() => VendorWhereInputObjectSchema)]).optional(),
    vendorcustomers: z.lazy(() => VendorCustomersListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectSchema = userwhereinputSchema;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
