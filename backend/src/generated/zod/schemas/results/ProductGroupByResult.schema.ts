import * as z from 'zod';
export const ProductGroupByResultSchema = z.array(z.object({
  id: z.string(),
  vendorId: z.string(),
  productName: z.string(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    vendorId: z.number(),
    productName: z.number(),
    description: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    vendor: z.number(),
    subscription: z.number(),
    request: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    vendorId: z.string().nullable(),
    productName: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    vendorId: z.string().nullable(),
    productName: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));