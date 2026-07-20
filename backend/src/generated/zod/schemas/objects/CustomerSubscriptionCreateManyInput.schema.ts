import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  vendorCustomerId: z.string(),
  productId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CustomerSubscriptionCreateManyInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionCreateManyInput>;
export const CustomerSubscriptionCreateManyInputObjectZodSchema = makeSchema();
