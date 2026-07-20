import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    phone: z.string(),
    address: z.string(),
    role: RoleSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    vendor: z.unknown().nullable(),
    vendorcustomers: z.array(z.unknown())
}).strict();
