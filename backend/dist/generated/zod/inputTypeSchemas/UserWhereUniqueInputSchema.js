import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumRoleFilterSchema } from './EnumRoleFilterSchema';
import { RoleSchema } from './RoleSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { VendorNullableScalarRelationFilterSchema } from './VendorNullableScalarRelationFilterSchema';
import { VendorWhereInputSchema } from './VendorWhereInputSchema';
import { VendorCustomersListRelationFilterSchema } from './VendorCustomersListRelationFilterSchema';
export const UserWhereUniqueInputSchema = z.union([
    z.object({
        id: z.uuid(),
        phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
    }),
    z.object({
        id: z.uuid(),
    }),
    z.object({
        phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
    }),
])
    .and(z.strictObject({
    id: z.uuid().optional(),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }).optional(),
    AND: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => UserWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string().min(2, { message: "Name must be at least 2 characters long" })]).optional(),
    address: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    role: z.union([z.lazy(() => EnumRoleFilterSchema), z.lazy(() => RoleSchema)]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    vendor: z.union([z.lazy(() => VendorNullableScalarRelationFilterSchema), z.lazy(() => VendorWhereInputSchema)]).optional().nullable(),
    vendorcustomers: z.lazy(() => VendorCustomersListRelationFilterSchema).optional(),
}));
export default UserWhereUniqueInputSchema;
