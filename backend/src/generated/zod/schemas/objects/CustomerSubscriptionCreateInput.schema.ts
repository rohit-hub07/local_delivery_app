import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersCreateNestedOneWithoutSubscriptionInputObjectSchema as VendorCustomersCreateNestedOneWithoutSubscriptionInputObjectSchema } from './VendorCustomersCreateNestedOneWithoutSubscriptionInput.schema';
import { ProductCreateNestedOneWithoutSubscriptionInputObjectSchema as ProductCreateNestedOneWithoutSubscriptionInputObjectSchema } from './ProductCreateNestedOneWithoutSubscriptionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  vendorCustomers: z.lazy(() => VendorCustomersCreateNestedOneWithoutSubscriptionInputObjectSchema),
  product: z.lazy(() => ProductCreateNestedOneWithoutSubscriptionInputObjectSchema)
}).strict();
export const CustomerSubscriptionCreateInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionCreateInput>;
export const CustomerSubscriptionCreateInputObjectZodSchema = makeSchema();
