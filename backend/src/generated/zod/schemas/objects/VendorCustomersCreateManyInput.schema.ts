import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  vendorId: z.string(),
  customerId: z.string(),
  customerPhone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const VendorCustomersCreateManyInputObjectSchema: z.ZodType<Prisma.VendorCustomersCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersCreateManyInput>;
export const VendorCustomersCreateManyInputObjectZodSchema = makeSchema();
