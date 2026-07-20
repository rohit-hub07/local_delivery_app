import * as z from 'zod';
// prettier-ignore
export const VendorCustomersInputSchema = z.object({
    id: z.string(),
    vendorId: z.string(),
    customerId: z.string(),
    customerPhone: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    vendor: z.unknown(),
    user: z.unknown(),
    subscription: z.array(z.unknown()),
    request: z.array(z.unknown())
}).strict();

export type VendorCustomersInputType = z.infer<typeof VendorCustomersInputSchema>;
