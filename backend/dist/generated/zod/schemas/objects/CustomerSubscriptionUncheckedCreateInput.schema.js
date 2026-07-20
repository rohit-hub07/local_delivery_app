import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    vendorCustomerId: z.string(),
    productId: z.string(),
    createdAt: z.coerce.date().optional()
}).strict();
export const CustomerSubscriptionUncheckedCreateInputObjectSchema = makeSchema();
export const CustomerSubscriptionUncheckedCreateInputObjectZodSchema = makeSchema();
