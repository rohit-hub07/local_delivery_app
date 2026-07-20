import * as z from 'zod';
export const ProductDeleteResultSchema = z.nullable(z.object({
    id: z.string(),
    vendorId: z.string(),
    productName: z.string(),
    description: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    vendor: z.unknown(),
    subscription: z.array(z.unknown()),
    request: z.array(z.unknown())
}));
