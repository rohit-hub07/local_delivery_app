import * as z from 'zod';
export const UserUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string(),
  address: z.string(),
  role: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  vendor: z.unknown().optional(),
  vendorcustomers: z.array(z.unknown())
}));