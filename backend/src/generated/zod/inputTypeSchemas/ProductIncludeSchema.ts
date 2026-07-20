import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { VendorArgsSchema } from "../outputTypeSchemas/VendorArgsSchema"
import { CustomerSubscriptionFindManyArgsSchema } from "../outputTypeSchemas/CustomerSubscriptionFindManyArgsSchema"
import { RequestsFindManyArgsSchema } from "../outputTypeSchemas/RequestsFindManyArgsSchema"
import { ProductCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProductCountOutputTypeArgsSchema"

export const ProductIncludeSchema: z.ZodType<Prisma.ProductInclude> = z.object({
  vendor: z.union([z.boolean(),z.lazy(() => VendorArgsSchema)]).optional(),
  subscription: z.union([z.boolean(),z.lazy(() => CustomerSubscriptionFindManyArgsSchema)]).optional(),
  request: z.union([z.boolean(),z.lazy(() => RequestsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default ProductIncludeSchema;
