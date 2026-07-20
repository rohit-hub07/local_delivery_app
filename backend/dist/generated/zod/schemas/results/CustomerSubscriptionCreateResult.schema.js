import * as z from 'zod';
export const CustomerSubscriptionCreateResultSchema = z.object({
    id: z.string(),
    vendorCustomerId: z.string(),
    productId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    vendorCustomers: z.unknown(),
    product: z.unknown()
});
