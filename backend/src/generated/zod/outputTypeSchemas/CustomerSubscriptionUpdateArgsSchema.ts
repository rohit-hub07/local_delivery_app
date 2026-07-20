import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { CustomerSubscriptionIncludeSchema } from '../inputTypeSchemas/CustomerSubscriptionIncludeSchema'
import { CustomerSubscriptionUpdateInputSchema } from '../inputTypeSchemas/CustomerSubscriptionUpdateInputSchema'
import { CustomerSubscriptionUncheckedUpdateInputSchema } from '../inputTypeSchemas/CustomerSubscriptionUncheckedUpdateInputSchema'
import { CustomerSubscriptionWhereUniqueInputSchema } from '../inputTypeSchemas/CustomerSubscriptionWhereUniqueInputSchema'
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

export const CustomerSubscriptionUpdateArgsSchema: z.ZodType<Prisma.CustomerSubscriptionUpdateArgs> = z.object({
  select: CustomerSubscriptionSelectSchema.optional(),
  include: z.lazy(() => CustomerSubscriptionIncludeSchema).optional(),
  data: z.union([ CustomerSubscriptionUpdateInputSchema, CustomerSubscriptionUncheckedUpdateInputSchema ]),
  where: CustomerSubscriptionWhereUniqueInputSchema, 
}).strict();

export default CustomerSubscriptionUpdateArgsSchema;
