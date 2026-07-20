import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { CustomerSubscriptionIncludeSchema } from '../inputTypeSchemas/CustomerSubscriptionIncludeSchema'
import { CustomerSubscriptionCreateInputSchema } from '../inputTypeSchemas/CustomerSubscriptionCreateInputSchema'
import { CustomerSubscriptionUncheckedCreateInputSchema } from '../inputTypeSchemas/CustomerSubscriptionUncheckedCreateInputSchema'
import { VendorCustomersArgsSchema } from "../outputTypeSchemas/VendorCustomersArgsSchema"
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CustomerSubscriptionSelectSchema: z.ZodType<Prisma.CustomerSubscriptionSelect> = z.object({
  id: z.boolean().optional(),
  vendorCustomerId: z.boolean().optional(),
  productId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  vendorCustomers: z.union([z.boolean(),z.lazy(() => VendorCustomersArgsSchema)]).optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()

export const CustomerSubscriptionCreateArgsSchema: z.ZodType<Prisma.CustomerSubscriptionCreateArgs> = z.object({
  select: CustomerSubscriptionSelectSchema.optional(),
  include: z.lazy(() => CustomerSubscriptionIncludeSchema).optional(),
  data: z.union([ CustomerSubscriptionCreateInputSchema, CustomerSubscriptionUncheckedCreateInputSchema ]),
}).strict();

export default CustomerSubscriptionCreateArgsSchema;
