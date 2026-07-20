import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional()
}).strict();
export const ProductWhereUniqueInputObjectSchema = makeSchema();
export const ProductWhereUniqueInputObjectZodSchema = makeSchema();
