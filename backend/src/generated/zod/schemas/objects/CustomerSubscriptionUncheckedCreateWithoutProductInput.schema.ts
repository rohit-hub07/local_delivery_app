import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  vendorCustomerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CustomerSubscriptionUncheckedCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionUncheckedCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionUncheckedCreateWithoutProductInput>;
export const CustomerSubscriptionUncheckedCreateWithoutProductInputObjectZodSchema = makeSchema();
