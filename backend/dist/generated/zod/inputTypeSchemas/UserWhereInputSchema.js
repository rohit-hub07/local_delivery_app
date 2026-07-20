import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumRoleFilterSchema } from './EnumRoleFilterSchema';
import { RoleSchema } from './RoleSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { VendorNullableScalarRelationFilterSchema } from './VendorNullableScalarRelationFilterSchema';
import { VendorWhereInputSchema } from './VendorWhereInputSchema';
import { VendorCustomersListRelationFilterSchema } from './VendorCustomersListRelationFilterSchema';
export const UserWhereInputSchema = z.strictObject({
    AND: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => UserWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    phone: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    address: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    role: z.union([z.lazy(() => EnumRoleFilterSchema), z.lazy(() => RoleSchema)]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    vendor: z.union([z.lazy(() => VendorNullableScalarRelationFilterSchema), z.lazy(() => VendorWhereInputSchema)]).optional().nullable(),
    vendorcustomers: z.lazy(() => VendorCustomersListRelationFilterSchema).optional(),
});
export default UserWhereInputSchema;
