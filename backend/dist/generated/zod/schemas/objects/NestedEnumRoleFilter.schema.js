import * as z from 'zod';
import { RoleSchema } from '../enums/Role.schema';
const nestedenumrolefilterSchema = z.object({
    equals: RoleSchema.optional(),
    in: RoleSchema.array().optional(),
    notIn: RoleSchema.array().optional(),
    not: z.union([RoleSchema, z.lazy(() => NestedEnumRoleFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumRoleFilterObjectSchema = nestedenumrolefilterSchema;
export const NestedEnumRoleFilterObjectZodSchema = nestedenumrolefilterSchema;
