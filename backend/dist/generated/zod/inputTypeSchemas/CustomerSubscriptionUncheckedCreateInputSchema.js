import { z } from 'zod';
export const CustomerSubscriptionUncheckedCreateInputSchema = z.strictObject({
    id: z.uuid().optional(),
    vendorCustomerId: z.string(),
    productId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
});
export default CustomerSubscriptionUncheckedCreateInputSchema;
