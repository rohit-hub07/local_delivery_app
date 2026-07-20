import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { VendorCustomersIncludeSchema } from '../inputTypeSchemas/VendorCustomersIncludeSchema'
import { VendorCustomersWhereInputSchema } from '../inputTypeSchemas/VendorCustomersWhereInputSchema'
import { VendorCustomersOrderByWithRelationInputSchema } from '../inputTypeSchemas/VendorCustomersOrderByWithRelationInputSchema'
import { VendorCustomersWhereUniqueInputSchema } from '../inputTypeSchemas/VendorCustomersWhereUniqueInputSchema'
import { VendorCustomersScalarFieldEnumSchema } from '../inputTypeSchemas/VendorCustomersScalarFieldEnumSchema'
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

export const VendorCustomersFindFirstArgsSchema: z.ZodType<Prisma.VendorCustomersFindFirstArgs> = z.object({
  select: VendorCustomersSelectSchema.optional(),
  include: z.lazy(() => VendorCustomersIncludeSchema).optional(),
  where: VendorCustomersWhereInputSchema.optional(), 
  orderBy: z.union([ VendorCustomersOrderByWithRelationInputSchema.array(), VendorCustomersOrderByWithRelationInputSchema ]).optional(),
  cursor: VendorCustomersWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VendorCustomersScalarFieldEnumSchema, VendorCustomersScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default VendorCustomersFindFirstArgsSchema;
