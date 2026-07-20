import { z } from 'zod';
export const VendorCustomersVendorIdCustomerIdCompoundUniqueInputSchema = z.strictObject({
    vendorId: z.string(),
    customerId: z.string(),
});
export default VendorCustomersVendorIdCustomerIdCompoundUniqueInputSchema;
