import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  productId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInput>;
export const CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputObjectZodSchema = makeSchema();
