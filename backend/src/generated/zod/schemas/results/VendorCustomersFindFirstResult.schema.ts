import * as z from 'zod';
export const VendorCustomersFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  vendorId: z.string(),
  customerId: z.string(),
  customerPhone: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  vendor: z.unknown(),
  user: z.unknown(),
  subscription: z.array(z.unknown()),
  request: z.array(z.unknown())
}));