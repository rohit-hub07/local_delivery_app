import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumRoleFilterSchema } from './NestedEnumRoleFilterSchema';
export const NestedEnumRoleWithAggregatesFilterSchema = z.strictObject({
    equals: z.lazy(() => RoleSchema).optional(),
    in: z.lazy(() => RoleSchema).array().optional(),
    notIn: z.lazy(() => RoleSchema).array().optional(),
    not: z.union([z.lazy(() => RoleSchema), z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
    _max: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
});
export default NestedEnumRoleWithAggregatesFilterSchema;
