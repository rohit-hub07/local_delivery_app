import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    vendorCustomerId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
}).strict();
export const CustomerSubscriptionUncheckedCreateWithoutProductInputObjectSchema = makeSchema();
export const CustomerSubscriptionUncheckedCreateWithoutProductInputObjectZodSchema = makeSchema();
