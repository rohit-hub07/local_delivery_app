import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    productName: z.string(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
}).strict();
export const ProductCreateManyVendorInputObjectSchema = makeSchema();
export const ProductCreateManyVendorInputObjectZodSchema = makeSchema();
