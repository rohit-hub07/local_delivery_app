import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    businessName: z.literal(true).optional(),
    businessPhone: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const VendorCountAggregateInputObjectSchema = makeSchema();
export const VendorCountAggregateInputObjectZodSchema = makeSchema();
