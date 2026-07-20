import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    vendorCustomerId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    type: z.literal(true).optional(),
    message: z.literal(true).optional(),
    start_date: z.literal(true).optional(),
    end_date: z.literal(true).optional(),
    status: z.literal(true).optional(),
    respondedAt: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const RequestsCountAggregateInputObjectSchema = makeSchema();
export const RequestsCountAggregateInputObjectZodSchema = makeSchema();
