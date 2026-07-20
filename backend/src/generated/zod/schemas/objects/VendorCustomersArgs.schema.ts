import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersSelectObjectSchema as VendorCustomersSelectObjectSchema } from './VendorCustomersSelect.schema';
import { VendorCustomersIncludeObjectSchema as VendorCustomersIncludeObjectSchema } from './VendorCustomersInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => VendorCustomersSelectObjectSchema).optional(),
  include: z.lazy(() => VendorCustomersIncludeObjectSchema).optional()
}).strict();
export const VendorCustomersArgsObjectSchema = makeSchema();
export const VendorCustomersArgsObjectZodSchema = makeSchema();
