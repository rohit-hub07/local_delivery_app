import * as z from 'zod';
export const VendorCustomersGroupByResultSchema = z.array(z.object({
  id: z.string(),
  vendorId: z.string(),
  customerId: z.string(),
  customerPhone: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    vendorId: z.number(),
    customerId: z.number(),
    customerPhone: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    vendor: z.number(),
    user: z.number(),
    subscription: z.number(),
    request: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    vendorId: z.string().nullable(),
    customerId: z.string().nullable(),
    customerPhone: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    vendorId: z.string().nullable(),
    customerId: z.string().nullable(),
    customerPhone: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));