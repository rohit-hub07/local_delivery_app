import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorWhereInputSchema } from './VendorWhereInputSchema';

export const VendorNullableScalarRelationFilterSchema: z.ZodType<Prisma.VendorNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => VendorWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => VendorWhereInputSchema).optional().nullable(),
});

export default VendorNullableScalarRelationFilterSchema;
