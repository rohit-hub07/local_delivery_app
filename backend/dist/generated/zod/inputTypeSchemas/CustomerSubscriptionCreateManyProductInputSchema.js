import { z } from 'zod';
export const CustomerSubscriptionCreateManyProductInputSchema = z.strictObject({
    id: z.uuid().optional(),
    vendorCustomerId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
});
export default CustomerSubscriptionCreateManyProductInputSchema;
