import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    vendorCustomerId: z.string(),
    productId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
}).strict();
export const CustomerSubscriptionCreateManyInputObjectSchema = makeSchema();
export const CustomerSubscriptionCreateManyInputObjectZodSchema = makeSchema();
