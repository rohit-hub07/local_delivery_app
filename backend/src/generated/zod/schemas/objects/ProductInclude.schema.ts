import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorArgsObjectSchema as VendorArgsObjectSchema } from './VendorArgs.schema';
import { CustomerSubscriptionFindManySchema as CustomerSubscriptionFindManySchema } from '../findManyCustomerSubscription.schema';
import { RequestsFindManySchema as RequestsFindManySchema } from '../findManyRequests.schema';
import { ProductCountOutputTypeArgsObjectSchema as ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  vendor: z.union([z.boolean(), z.lazy(() => VendorArgsObjectSchema)]).optional(),
  subscription: z.union([z.boolean(), z.lazy(() => CustomerSubscriptionFindManySchema)]).optional(),
  request: z.union([z.boolean(), z.lazy(() => RequestsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProductIncludeObjectSchema: z.ZodType<Prisma.ProductInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProductInclude>;
export const ProductIncludeObjectZodSchema = makeSchema();
