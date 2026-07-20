import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional()
}).strict();
export const RequestsWhereUniqueInputObjectSchema = makeSchema();
export const RequestsWhereUniqueInputObjectZodSchema = makeSchema();
