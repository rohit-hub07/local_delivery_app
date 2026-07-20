import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProductCreateNestedOneWithoutSubscriptionInputObjectSchema as ProductCreateNestedOneWithoutSubscriptionInputObjectSchema } from './ProductCreateNestedOneWithoutSubscriptionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutSubscriptionInputObjectSchema)
}).strict();
export const CustomerSubscriptionCreateWithoutVendorCustomersInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionCreateWithoutVendorCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionCreateWithoutVendorCustomersInput>;
export const CustomerSubscriptionCreateWithoutVendorCustomersInputObjectZodSchema = makeSchema();
