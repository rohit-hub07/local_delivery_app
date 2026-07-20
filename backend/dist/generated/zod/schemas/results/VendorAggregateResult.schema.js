import * as z from 'zod';
export const VendorAggregateResultSchema = z.object({ _count: z.object({
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
    }).nullable().optional() });
