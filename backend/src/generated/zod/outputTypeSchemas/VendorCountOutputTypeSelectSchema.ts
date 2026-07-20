import { z } from 'zod';
import type { Prisma } from '../../prisma/client';

export const VendorCountOutputTypeSelectSchema: z.ZodType<Prisma.VendorCountOutputTypeSelect> = z.object({
  product: z.boolean().optional(),
  vendorcustomers: z.boolean().optional(),
}).strict();

export default VendorCountOutputTypeSelectSchema;
