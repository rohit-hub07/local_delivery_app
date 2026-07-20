import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorArgsObjectSchema as VendorArgsObjectSchema } from './VendorArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { CustomerSubscriptionFindManySchema as CustomerSubscriptionFindManySchema } from '../findManyCustomerSubscription.schema';
import { RequestsFindManySchema as RequestsFindManySchema } from '../findManyRequests.schema';
import { VendorCustomersCountOutputTypeArgsObjectSchema as VendorCustomersCountOutputTypeArgsObjectSchema } from './VendorCustomersCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  vendorId: z.boolean().optional(),
  customerId: z.boolean().optional(),
  customerPhone: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  vendor: z.union([z.boolean(), z.lazy(() => VendorArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  subscription: z.union([z.boolean(), z.lazy(() => CustomerSubscriptionFindManySchema)]).optional(),
  request: z.union([z.boolean(), z.lazy(() => RequestsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => VendorCustomersCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const VendorCustomersSelectObjectSchema: z.ZodType<Prisma.VendorCustomersSelect> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersSelect>;
export const VendorCustomersSelectObjectZodSchema = makeSchema();
