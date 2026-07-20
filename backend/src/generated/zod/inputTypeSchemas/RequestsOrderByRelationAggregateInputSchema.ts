import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RequestsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RequestsOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default RequestsOrderByRelationAggregateInputSchema;
