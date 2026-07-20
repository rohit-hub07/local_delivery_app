import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    vendorId: z.literal(true).optional(),
    customerId: z.literal(true).optional(),
    customerPhone: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional()
}).strict();
export const VendorCustomersMinAggregateInputObjectSchema = makeSchema();
export const VendorCustomersMinAggregateInputObjectZodSchema = makeSchema();
