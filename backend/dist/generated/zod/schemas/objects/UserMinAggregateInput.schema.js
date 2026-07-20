import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    phone: z.literal(true).optional(),
    address: z.literal(true).optional(),
    role: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional()
}).strict();
export const UserMinAggregateInputObjectSchema = makeSchema();
export const UserMinAggregateInputObjectZodSchema = makeSchema();
