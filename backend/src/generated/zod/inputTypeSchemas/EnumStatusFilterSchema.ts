import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';
import { NestedEnumStatusFilterSchema } from './NestedEnumStatusFilterSchema';

export const EnumStatusFilterSchema: z.ZodType<Prisma.EnumStatusFilter> = z.strictObject({
  equals: z.lazy(() => StatusSchema).optional(),
  in: z.lazy(() => StatusSchema).array().optional(),
  notIn: z.lazy(() => StatusSchema).array().optional(),
  not: z.union([ z.lazy(() => StatusSchema), z.lazy(() => NestedEnumStatusFilterSchema) ]).optional(),
});

export default EnumStatusFilterSchema;
