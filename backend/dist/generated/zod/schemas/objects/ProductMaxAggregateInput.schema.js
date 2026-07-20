import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    vendorId: z.literal(true).optional(),
    productName: z.literal(true).optional(),
    description: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional()
}).strict();
export const ProductMaxAggregateInputObjectSchema = makeSchema();
export const ProductMaxAggregateInputObjectZodSchema = makeSchema();
