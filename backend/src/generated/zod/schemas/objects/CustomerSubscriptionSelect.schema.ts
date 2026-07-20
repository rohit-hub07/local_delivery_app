import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersArgsObjectSchema as VendorCustomersArgsObjectSchema } from './VendorCustomersArgs.schema';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  vendorCustomerId: z.boolean().optional(),
  productId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  vendorCustomers: z.union([z.boolean(), z.lazy(() => VendorCustomersArgsObjectSchema)]).optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const CustomerSubscriptionSelectObjectSchema: z.ZodType<Prisma.CustomerSubscriptionSelect> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionSelect>;
export const CustomerSubscriptionSelectObjectZodSchema = makeSchema();
