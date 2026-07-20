import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { VendorCustomersCountOutputTypeSelectSchema } from './VendorCustomersCountOutputTypeSelectSchema';

export const VendorCustomersCountOutputTypeArgsSchema: z.ZodType<Prisma.VendorCustomersCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => VendorCustomersCountOutputTypeSelectSchema).nullish(),
}).strict();

export default VendorCustomersCountOutputTypeSelectSchema;
