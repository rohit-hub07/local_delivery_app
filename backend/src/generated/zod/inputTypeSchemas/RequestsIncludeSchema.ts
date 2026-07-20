import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { VendorCustomersArgsSchema } from "../outputTypeSchemas/VendorCustomersArgsSchema"
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema"

export const RequestsIncludeSchema: z.ZodType<Prisma.RequestsInclude> = z.object({
  vendorCustomers: z.union([z.boolean(),z.lazy(() => VendorCustomersArgsSchema)]).optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict();

export default RequestsIncludeSchema;
