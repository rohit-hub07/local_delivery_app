import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const CustomerSubscriptionScalarWhereInputSchema: z.ZodType<Prisma.CustomerSubscriptionScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => CustomerSubscriptionScalarWhereInputSchema), z.lazy(() => CustomerSubscriptionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CustomerSubscriptionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CustomerSubscriptionScalarWhereInputSchema), z.lazy(() => CustomerSubscriptionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  vendorCustomerId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default CustomerSubscriptionScalarWhereInputSchema;
