import * as z from 'zod';
// prettier-ignore
export const CustomerSubscriptionResultSchema = z.object({
    id: z.string(),
    vendorCustomerId: z.string(),
    productId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    vendorCustomers: z.unknown(),
    product: z.unknown()
}).strict();

export type CustomerSubscriptionResultType = z.infer<typeof CustomerSubscriptionResultSchema>;
