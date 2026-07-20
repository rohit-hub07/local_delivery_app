import * as z from 'zod';
export const ProductFindManyResultSchema = z.object({
    data: z.array(z.object({
        id: z.string(),
        vendorId: z.string(),
        productName: z.string(),
        description: z.string(),
        createdAt: z.date(),
        updatedAt: z.date(),
        vendor: z.unknown(),
        subscription: z.array(z.unknown()),
        request: z.array(z.unknown())
    })),
    pagination: z.object({
        page: z.number().int().min(1),
        pageSize: z.number().int().min(1),
        total: z.number().int().min(0),
        totalPages: z.number().int().min(0),
        hasNext: z.boolean(),
        hasPrev: z.boolean()
    })
});
