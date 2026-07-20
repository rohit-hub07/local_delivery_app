import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  vendorCustomerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CustomerSubscriptionCreateManyProductInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionCreateManyProductInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionCreateManyProductInput>;
export const CustomerSubscriptionCreateManyProductInputObjectZodSchema = makeSchema();
