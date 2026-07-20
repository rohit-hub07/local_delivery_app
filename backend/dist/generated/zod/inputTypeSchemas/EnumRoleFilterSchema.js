import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { NestedEnumRoleFilterSchema } from './NestedEnumRoleFilterSchema';
export const EnumRoleFilterSchema = z.strictObject({
    equals: z.lazy(() => RoleSchema).optional(),
    in: z.lazy(() => RoleSchema).array().optional(),
    notIn: z.lazy(() => RoleSchema).array().optional(),
    not: z.union([z.lazy(() => RoleSchema), z.lazy(() => NestedEnumRoleFilterSchema)]).optional(),
});
export default EnumRoleFilterSchema;
