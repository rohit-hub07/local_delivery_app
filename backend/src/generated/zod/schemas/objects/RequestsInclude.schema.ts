import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersArgsObjectSchema as VendorCustomersArgsObjectSchema } from './VendorCustomersArgs.schema';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  vendorCustomers: z.union([z.boolean(), z.lazy(() => VendorCustomersArgsObjectSchema)]).optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const RequestsIncludeObjectSchema: z.ZodType<Prisma.RequestsInclude> = makeSchema() as unknown as z.ZodType<Prisma.RequestsInclude>;
export const RequestsIncludeObjectZodSchema = makeSchema();
