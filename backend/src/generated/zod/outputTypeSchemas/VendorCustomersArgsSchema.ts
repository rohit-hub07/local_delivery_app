import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { VendorCustomersSelectSchema } from '../inputTypeSchemas/VendorCustomersSelectSchema';
import { VendorCustomersIncludeSchema } from '../inputTypeSchemas/VendorCustomersIncludeSchema';

export const VendorCustomersArgsSchema: z.ZodType<Prisma.VendorCustomersDefaultArgs> = z.object({
  select: z.lazy(() => VendorCustomersSelectSchema).optional(),
  include: z.lazy(() => VendorCustomersIncludeSchema).optional(),
}).strict();

export default VendorCustomersArgsSchema;
