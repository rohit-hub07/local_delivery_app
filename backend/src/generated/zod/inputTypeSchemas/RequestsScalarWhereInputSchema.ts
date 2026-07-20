import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumStatusFilterSchema } from './EnumStatusFilterSchema';
import { StatusSchema } from './StatusSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const RequestsScalarWhereInputSchema: z.ZodType<Prisma.RequestsScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => RequestsScalarWhereInputSchema), z.lazy(() => RequestsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RequestsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RequestsScalarWhereInputSchema), z.lazy(() => RequestsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  vendorCustomerId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  message: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  start_date: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  end_date: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumStatusFilterSchema), z.lazy(() => StatusSchema) ]).optional(),
  respondedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default RequestsScalarWhereInputSchema;
