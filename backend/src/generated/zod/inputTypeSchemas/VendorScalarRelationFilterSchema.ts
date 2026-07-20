import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorWhereInputSchema } from './VendorWhereInputSchema';

export const VendorScalarRelationFilterSchema: z.ZodType<Prisma.VendorScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => VendorWhereInputSchema).optional(),
  isNot: z.lazy(() => VendorWhereInputSchema).optional(),
});

export default VendorScalarRelationFilterSchema;
