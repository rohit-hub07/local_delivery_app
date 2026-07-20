import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  vendorId: z.string(),
  customerPhone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const VendorCustomersCreateManyUserInputObjectSchema: z.ZodType<Prisma.VendorCustomersCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersCreateManyUserInput>;
export const VendorCustomersCreateManyUserInputObjectZodSchema = makeSchema();
