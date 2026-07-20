import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    phone: z.string().optional()
}).strict();
export const UserWhereUniqueInputObjectSchema = makeSchema();
export const UserWhereUniqueInputObjectZodSchema = makeSchema();
