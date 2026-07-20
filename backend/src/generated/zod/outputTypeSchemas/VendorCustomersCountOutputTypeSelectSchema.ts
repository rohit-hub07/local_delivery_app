import { z } from 'zod';
import type { Prisma } from '../../prisma/client';

export const VendorCustomersCountOutputTypeSelectSchema: z.ZodType<Prisma.VendorCustomersCountOutputTypeSelect> = z.object({
  subscription: z.boolean().optional(),
  request: z.boolean().optional(),
}).strict();

export default VendorCustomersCountOutputTypeSelectSchema;
