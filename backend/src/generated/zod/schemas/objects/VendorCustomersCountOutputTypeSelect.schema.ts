import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersCountOutputTypeCountSubscriptionArgsObjectSchema as VendorCustomersCountOutputTypeCountSubscriptionArgsObjectSchema } from './VendorCustomersCountOutputTypeCountSubscriptionArgs.schema';
import { VendorCustomersCountOutputTypeCountRequestArgsObjectSchema as VendorCustomersCountOutputTypeCountRequestArgsObjectSchema } from './VendorCustomersCountOutputTypeCountRequestArgs.schema'

const makeSchema = () => z.object({
  subscription: z.union([z.boolean(), z.lazy(() => VendorCustomersCountOutputTypeCountSubscriptionArgsObjectSchema)]).optional(),
  request: z.union([z.boolean(), z.lazy(() => VendorCustomersCountOutputTypeCountRequestArgsObjectSchema)]).optional()
}).strict();
export const VendorCustomersCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.VendorCustomersCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersCountOutputTypeSelect>;
export const VendorCustomersCountOutputTypeSelectObjectZodSchema = makeSchema();
