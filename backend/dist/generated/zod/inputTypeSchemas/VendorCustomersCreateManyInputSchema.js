import { z } from 'zod';
export const VendorCustomersCreateManyInputSchema = z.strictObject({
    id: z.uuid().optional(),
    vendorId: z.string(),
    customerId: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
    customerPhone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
});
export default VendorCustomersCreateManyInputSchema;
