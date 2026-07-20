import * as z from 'zod';
export const RequestsAggregateResultSchema = z.object({ _count: z.object({
        id: z.number(),
        vendorCustomerId: z.number(),
        productId: z.number(),
        type: z.number(),
        message: z.number(),
        start_date: z.number(),
        end_date: z.number(),
        status: z.number(),
        respondedAt: z.number(),
        createdAt: z.number(),
        updatedAt: z.number(),
        vendorCustomers: z.number(),
        product: z.number()
    }).optional(),
    _min: z.object({
        id: z.string().nullable(),
        vendorCustomerId: z.string().nullable(),
        productId: z.string().nullable(),
        type: z.string().nullable(),
        message: z.string().nullable(),
        start_date: z.date().nullable(),
        end_date: z.date().nullable(),
        respondedAt: z.date().nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable()
    }).nullable().optional(),
    _max: z.object({
        id: z.string().nullable(),
        vendorCustomerId: z.string().nullable(),
        productId: z.string().nullable(),
        type: z.string().nullable(),
        message: z.string().nullable(),
        start_date: z.date().nullable(),
        end_date: z.date().nullable(),
        respondedAt: z.date().nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable()
    }).nullable().optional() });
