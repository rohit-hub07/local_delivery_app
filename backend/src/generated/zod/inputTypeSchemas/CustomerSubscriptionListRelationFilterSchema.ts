import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerSubscriptionWhereInputSchema } from './CustomerSubscriptionWhereInputSchema';

export const CustomerSubscriptionListRelationFilterSchema: z.ZodType<Prisma.CustomerSubscriptionListRelationFilter> = z.strictObject({
  every: z.lazy(() => CustomerSubscriptionWhereInputSchema).optional(),
  some: z.lazy(() => CustomerSubscriptionWhereInputSchema).optional(),
  none: z.lazy(() => CustomerSubscriptionWhereInputSchema).optional(),
});

export default CustomerSubscriptionListRelationFilterSchema;
