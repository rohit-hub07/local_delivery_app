import * as z from 'zod';
const makeSchema = () => z.object({
    vendorCustomerId: z.string(),
    productId: z.string()
}).strict();
export const CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInputObjectSchema = makeSchema();
export const CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInputObjectZodSchema = makeSchema();
