import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  vendorCustomerId: z.string(),
  productId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const CustomerSubscriptionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionUncheckedCreateInput>;
export const CustomerSubscriptionUncheckedCreateInputObjectZodSchema = makeSchema();
