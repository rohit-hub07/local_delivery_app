import * as z from 'zod';
export const VendorFindFirstResultSchema = z.nullable(z.object({
    id: z.string(),
    userId: z.string(),
    businessName: z.string(),
    businessPhone: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    user: z.unknown(),
    product: z.array(z.unknown()),
    vendorcustomers: z.array(z.unknown())
}));
