import * as z from 'zod';
import { RoleSchema } from '../enums/Role.schema';
const makeSchema = () => z.object({
    set: RoleSchema.optional()
}).strict();
export const EnumRoleFieldUpdateOperationsInputObjectSchema = makeSchema();
export const EnumRoleFieldUpdateOperationsInputObjectZodSchema = makeSchema();
