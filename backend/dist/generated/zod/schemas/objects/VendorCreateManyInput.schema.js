import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    userId: z.string(),
    businessName: z.string(),
    businessPhone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
}).strict();
export const VendorCreateManyInputObjectSchema = makeSchema();
export const VendorCreateManyInputObjectZodSchema = makeSchema();
