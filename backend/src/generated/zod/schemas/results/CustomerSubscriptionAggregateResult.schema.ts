import * as z from 'zod';
export const CustomerSubscriptionAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    vendorCustomerId: z.number(),
    productId: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    vendorCustomers: z.number(),
    product: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    vendorCustomerId: z.string().nullable(),
    productId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    vendorCustomerId: z.string().nullable(),
    productId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});