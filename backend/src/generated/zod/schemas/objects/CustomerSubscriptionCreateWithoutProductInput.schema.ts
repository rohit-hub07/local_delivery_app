import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersCreateNestedOneWithoutSubscriptionInputObjectSchema as VendorCustomersCreateNestedOneWithoutSubscriptionInputObjectSchema } from './VendorCustomersCreateNestedOneWithoutSubscriptionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vendorCustomers: z.lazy(() => VendorCustomersCreateNestedOneWithoutSubscriptionInputObjectSchema)
}).strict();
export const CustomerSubscriptionCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionCreateWithoutProductInput>;
export const CustomerSubscriptionCreateWithoutProductInputObjectZodSchema = makeSchema();
