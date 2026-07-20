import { z } from 'zod';
/////////////////////////////////////////
// VENDOR CUSTOMERS SCHEMA
/////////////////////////////////////////
export const VendorCustomersSchema = z.object({
    id: z.uuid(),
    vendorId: z.string(),
    customerId: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
    customerPhone: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});
export default VendorCustomersSchema;
