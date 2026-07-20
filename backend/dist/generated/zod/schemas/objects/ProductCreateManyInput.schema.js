import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    vendorId: z.string(),
    productName: z.string(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
}).strict();
export const ProductCreateManyInputObjectSchema = makeSchema();
export const ProductCreateManyInputObjectZodSchema = makeSchema();
