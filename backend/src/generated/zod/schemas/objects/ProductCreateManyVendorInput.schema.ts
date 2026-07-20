import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  productName: z.string(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ProductCreateManyVendorInputObjectSchema: z.ZodType<Prisma.ProductCreateManyVendorInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateManyVendorInput>;
export const ProductCreateManyVendorInputObjectZodSchema = makeSchema();
