import * as z from 'zod';
const makeSchema = () => z.object({
    vendorId: z.string(),
    customerId: z.string()
}).strict();
export const VendorCustomersVendorIdCustomerIdCompoundUniqueInputObjectSchema = makeSchema();
export const VendorCustomersVendorIdCustomerIdCompoundUniqueInputObjectZodSchema = makeSchema();
