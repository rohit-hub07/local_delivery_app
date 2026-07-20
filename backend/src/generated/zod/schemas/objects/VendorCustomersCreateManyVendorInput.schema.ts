import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  customerId: z.string(),
  customerPhone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const VendorCustomersCreateManyVendorInputObjectSchema: z.ZodType<Prisma.VendorCustomersCreateManyVendorInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersCreateManyVendorInput>;
export const VendorCustomersCreateManyVendorInputObjectZodSchema = makeSchema();
