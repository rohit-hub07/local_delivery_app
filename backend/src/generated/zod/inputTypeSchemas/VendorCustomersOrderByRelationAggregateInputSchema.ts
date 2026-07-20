import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VendorCustomersOrderByRelationAggregateInputSchema: z.ZodType<Prisma.VendorCustomersOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default VendorCustomersOrderByRelationAggregateInputSchema;
