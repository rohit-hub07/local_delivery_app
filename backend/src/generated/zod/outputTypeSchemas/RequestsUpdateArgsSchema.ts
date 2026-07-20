import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { RequestsIncludeSchema } from '../inputTypeSchemas/RequestsIncludeSchema'
import { RequestsUpdateInputSchema } from '../inputTypeSchemas/RequestsUpdateInputSchema'
import { RequestsUncheckedUpdateInputSchema } from '../inputTypeSchemas/RequestsUncheckedUpdateInputSchema'
import { RequestsWhereUniqueInputSchema } from '../inputTypeSchemas/RequestsWhereUniqueInputSchema'
import { VendorCustomersArgsSchema } from "../outputTypeSchemas/VendorCustomersArgsSchema"
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RequestsSelectSchema: z.ZodType<Prisma.RequestsSelect> = z.object({
  id: z.boolean().optional(),
  vendorCustomerId: z.boolean().optional(),
  productId: z.boolean().optional(),
  type: z.boolean().optional(),
  message: z.boolean().optional(),
  start_date: z.boolean().optional(),
  end_date: z.boolean().optional(),
  status: z.boolean().optional(),
  respondedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  vendorCustomers: z.union([z.boolean(),z.lazy(() => VendorCustomersArgsSchema)]).optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()

export const RequestsUpdateArgsSchema: z.ZodType<Prisma.RequestsUpdateArgs> = z.object({
  select: RequestsSelectSchema.optional(),
  include: z.lazy(() => RequestsIncludeSchema).optional(),
  data: z.union([ RequestsUpdateInputSchema, RequestsUncheckedUpdateInputSchema ]),
  where: RequestsWhereUniqueInputSchema, 
}).strict();

export default RequestsUpdateArgsSchema;
