import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const CustomerSubscriptionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CustomerSubscriptionScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => CustomerSubscriptionScalarWhereWithAggregatesInputSchema), z.lazy(() => CustomerSubscriptionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CustomerSubscriptionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CustomerSubscriptionScalarWhereWithAggregatesInputSchema), z.lazy(() => CustomerSubscriptionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  vendorCustomerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default CustomerSubscriptionScalarWhereWithAggregatesInputSchema;
