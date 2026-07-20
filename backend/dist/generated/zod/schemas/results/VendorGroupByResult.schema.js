import * as z from 'zod';
export const VendorGroupByResultSchema = z.array(z.object({
    id: z.string(),
    userId: z.string(),
    businessName: z.string(),
    businessPhone: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    _count: z.object({
        id: z.number(),
        userId: z.number(),
        businessName: z.number(),
        businessPhone: z.number(),
        createdAt: z.number(),
        updatedAt: z.number(),
        user: z.number(),
        product: z.number(),
        vendorcustomers: z.number()
    }).optional(),
    _min: z.object({
        id: z.string().nullable(),
        userId: z.string().nullable(),
        businessName: z.string().nullable(),
        businessPhone: z.string().nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable()
    }).nullable().optional(),
    _max: z.object({
        id: z.string().nullable(),
        userId: z.string().nullable(),
        businessName: z.string().nullable(),
        businessPhone: z.string().nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable()
    }).nullable().optional()
}));
