import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    productId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
}).strict();
export const CustomerSubscriptionCreateManyVendorCustomersInputObjectSchema = makeSchema();
export const CustomerSubscriptionCreateManyVendorCustomersInputObjectZodSchema = makeSchema();
