import * as z from 'zod';
import { RoleSchema } from '../enums/Role.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    name: z.string(),
    phone: z.string(),
    address: z.string(),
    role: RoleSchema.optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
}).strict();
export const UserCreateManyInputObjectSchema = makeSchema();
export const UserCreateManyInputObjectZodSchema = makeSchema();
