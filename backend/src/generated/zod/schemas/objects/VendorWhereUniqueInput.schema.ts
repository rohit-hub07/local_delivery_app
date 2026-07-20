import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string().optional()
}).strict();
export const VendorWhereUniqueInputObjectSchema: z.ZodType<Prisma.VendorWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorWhereUniqueInput>;
export const VendorWhereUniqueInputObjectZodSchema = makeSchema();
