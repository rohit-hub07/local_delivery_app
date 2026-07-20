import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    phone: z.string(),
    address: z.string(),
    role: RoleSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    vendor: z.unknown().optional().nullable(),
    vendorcustomers: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
