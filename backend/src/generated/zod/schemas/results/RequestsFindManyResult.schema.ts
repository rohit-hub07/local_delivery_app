import * as z from 'zod';
export const RequestsFindManyResultSchema = z.object({
  data: z.array(z.object({
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