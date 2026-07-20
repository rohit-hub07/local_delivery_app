import * as z from 'zod';
export const RequestsFindUniqueResultSchema = z.nullable(z.object({
    id: z.string(),
    vendorCustomerId: z.string(),
    productId: z.string(),
    type: z.string(),
    message: z.string(),
    start_date: z.date(),
    end_date: z.date(),
    status: z.unknown(),
    respondedAt: z.date().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
    vendorCustomers: z.unknown(),
    product: z.unknown()
}));
