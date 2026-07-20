import * as z from 'zod';
import { CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInputObjectSchema as CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInputObjectSchema } from './CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    vendorCustomerId_productId: z.lazy(() => CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const CustomerSubscriptionWhereUniqueInputObjectSchema = makeSchema();
export const CustomerSubscriptionWhereUniqueInputObjectZodSchema = makeSchema();
