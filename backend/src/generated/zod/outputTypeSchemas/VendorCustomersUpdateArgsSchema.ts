import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { VendorCustomersIncludeSchema } from '../inputTypeSchemas/VendorCustomersIncludeSchema'
import { VendorCustomersUpdateInputSchema } from '../inputTypeSchemas/VendorCustomersUpdateInputSchema'
import { VendorCustomersUncheckedUpdateInputSchema } from '../inputTypeSchemas/VendorCustomersUncheckedUpdateInputSchema'
import { VendorCustomersWhereUniqueInputSchema } from '../inputTypeSchemas/VendorCustomersWhereUniqueInputSchema'
import { VendorArgsSchema } from "../outputTypeSchemas/VendorArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { CustomerSubscriptionFindManyArgsSchema } from "../outputTypeSchemas/CustomerSubscriptionFindManyArgsSchema"
import { RequestsFindManyArgsSchema } from "../outputTypeSchemas/RequestsFindManyArgsSchema"
import { VendorCustomersCountOutputTypeArgsSchema } from "../outputTypeSchemas/VendorCustomersCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VendorCustomersSelectSchema: z.ZodType<Prisma.VendorCustomersSelect> = z.object({
  id: z.boolean().optional(),
  vendorId: z.boolean().optional(),
  customerId: z.boolean().optional(),
  customerPhone: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  vendor: z.union([z.boolean(),z.lazy(() => VendorArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  subscription: z.union([z.boolean(),z.lazy(() => CustomerSubscriptionFindManyArgsSchema)]).optional(),
  request: z.union([z.boolean(),z.lazy(() => RequestsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => VendorCustomersCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const VendorCustomersUpdateArgsSchema: z.ZodType<Prisma.VendorCustomersUpdateArgs> = z.object({
  select: VendorCustomersSelectSchema.optional(),
  include: z.lazy(() => VendorCustomersIncludeSchema).optional(),
  data: z.union([ VendorCustomersUpdateInputSchema, VendorCustomersUncheckedUpdateInputSchema ]),
  where: VendorCustomersWhereUniqueInputSchema, 
}).strict();

export default VendorCustomersUpdateArgsSchema;
