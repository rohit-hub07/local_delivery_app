import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCountOutputTypeCountProductArgsObjectSchema as VendorCountOutputTypeCountProductArgsObjectSchema } from './VendorCountOutputTypeCountProductArgs.schema';
import { VendorCountOutputTypeCountVendorcustomersArgsObjectSchema as VendorCountOutputTypeCountVendorcustomersArgsObjectSchema } from './VendorCountOutputTypeCountVendorcustomersArgs.schema'

const makeSchema = () => z.object({
  product: z.union([z.boolean(), z.lazy(() => VendorCountOutputTypeCountProductArgsObjectSchema)]).optional(),
  vendorcustomers: z.union([z.boolean(), z.lazy(() => VendorCountOutputTypeCountVendorcustomersArgsObjectSchema)]).optional()
}).strict();
export const VendorCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.VendorCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.VendorCountOutputTypeSelect>;
export const VendorCountOutputTypeSelectObjectZodSchema = makeSchema();
