import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CustomerSubscriptionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CustomerSubscriptionOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default CustomerSubscriptionOrderByRelationAggregateInputSchema;
