import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProductIncludeSchema } from '../inputTypeSchemas/ProductIncludeSchema'
import { ProductUpdateInputSchema } from '../inputTypeSchemas/ProductUpdateInputSchema'
import { ProductUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProductUncheckedUpdateInputSchema'
import { ProductWhereUniqueInputSchema } from '../inputTypeSchemas/ProductWhereUniqueInputSchema'
import { VendorArgsSchema } from "../outputTypeSchemas/VendorArgsSchema"
import { CustomerSubscriptionFindManyArgsSchema } from "../outputTypeSchemas/CustomerSubscriptionFindManyArgsSchema"
import { RequestsFindManyArgsSchema } from "../outputTypeSchemas/RequestsFindManyArgsSchema"
import { ProductCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProductCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  id: z.boolean().optional(),
  vendorId: z.boolean().optional(),
  productName: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  vendor: z.union([z.boolean(),z.lazy(() => VendorArgsSchema)]).optional(),
  subscription: z.union([z.boolean(),z.lazy(() => CustomerSubscriptionFindManyArgsSchema)]).optional(),
  request: z.union([z.boolean(),z.lazy(() => RequestsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ProductUpdateArgsSchema: z.ZodType<Prisma.ProductUpdateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: z.lazy(() => ProductIncludeSchema).optional(),
  data: z.union([ ProductUpdateInputSchema, ProductUncheckedUpdateInputSchema ]),
  where: ProductWhereUniqueInputSchema, 
}).strict();

export default ProductUpdateArgsSchema;
