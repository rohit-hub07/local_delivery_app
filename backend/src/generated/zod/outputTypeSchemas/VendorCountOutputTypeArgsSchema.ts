import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { VendorCountOutputTypeSelectSchema } from './VendorCountOutputTypeSelectSchema';

export const VendorCountOutputTypeArgsSchema: z.ZodType<Prisma.VendorCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => VendorCountOutputTypeSelectSchema).nullish(),
}).strict();

export default VendorCountOutputTypeSelectSchema;
