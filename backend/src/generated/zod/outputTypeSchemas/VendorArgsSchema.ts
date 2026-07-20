import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { VendorSelectSchema } from '../inputTypeSchemas/VendorSelectSchema';
import { VendorIncludeSchema } from '../inputTypeSchemas/VendorIncludeSchema';

export const VendorArgsSchema: z.ZodType<Prisma.VendorDefaultArgs> = z.object({
  select: z.lazy(() => VendorSelectSchema).optional(),
  include: z.lazy(() => VendorIncludeSchema).optional(),
}).strict();

export default VendorArgsSchema;
