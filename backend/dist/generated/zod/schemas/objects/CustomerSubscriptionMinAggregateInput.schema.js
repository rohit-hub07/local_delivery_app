import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    vendorCustomerId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional()
}).strict();
export const CustomerSubscriptionMinAggregateInputObjectSchema = makeSchema();
export const CustomerSubscriptionMinAggregateInputObjectZodSchema = makeSchema();
