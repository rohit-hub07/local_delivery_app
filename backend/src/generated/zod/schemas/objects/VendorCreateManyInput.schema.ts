import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  businessName: z.string(),
  businessPhone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const VendorCreateManyInputObjectSchema: z.ZodType<Prisma.VendorCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCreateManyInput>;
export const VendorCreateManyInputObjectZodSchema = makeSchema();
