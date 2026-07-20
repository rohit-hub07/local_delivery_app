import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    userId: z.string().optional()
}).strict();
export const VendorWhereUniqueInputObjectSchema = makeSchema();
export const VendorWhereUniqueInputObjectZodSchema = makeSchema();
