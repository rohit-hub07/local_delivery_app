import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RequestsWhereInputSchema } from './RequestsWhereInputSchema';

export const RequestsListRelationFilterSchema: z.ZodType<Prisma.RequestsListRelationFilter> = z.strictObject({
  every: z.lazy(() => RequestsWhereInputSchema).optional(),
  some: z.lazy(() => RequestsWhereInputSchema).optional(),
  none: z.lazy(() => RequestsWhereInputSchema).optional(),
});

export default RequestsListRelationFilterSchema;
