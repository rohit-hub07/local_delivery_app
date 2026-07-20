import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { EnumStatusWithAggregatesFilterSchema } from './EnumStatusWithAggregatesFilterSchema';
import { StatusSchema } from './StatusSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';

export const RequestsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RequestsScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => RequestsScalarWhereWithAggregatesInputSchema), z.lazy(() => RequestsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RequestsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RequestsScalarWhereWithAggregatesInputSchema), z.lazy(() => RequestsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  vendorCustomerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  message: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  start_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  end_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumStatusWithAggregatesFilterSchema), z.lazy(() => StatusSchema) ]).optional(),
  respondedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default RequestsScalarWhereWithAggregatesInputSchema;
