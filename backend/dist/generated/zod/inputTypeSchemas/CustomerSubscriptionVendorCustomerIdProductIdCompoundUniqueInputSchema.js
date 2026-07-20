import { z } from 'zod';
export const CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInputSchema = z.strictObject({
    vendorCustomerId: z.string(),
    productId: z.string(),
});
export default CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInputSchema;
