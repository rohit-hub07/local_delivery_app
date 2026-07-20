import { z } from 'zod';
/////////////////////////////////////////
// CUSTOMER SUBSCRIPTION SCHEMA
/////////////////////////////////////////
export const CustomerSubscriptionSchema = z.object({
    id: z.uuid(),
    vendorCustomerId: z.string(),
    productId: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});
export default CustomerSubscriptionSchema;
