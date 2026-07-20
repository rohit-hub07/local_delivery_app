import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { RequestsSelectSchema } from '../inputTypeSchemas/RequestsSelectSchema';
import { RequestsIncludeSchema } from '../inputTypeSchemas/RequestsIncludeSchema';

export const RequestsArgsSchema: z.ZodType<Prisma.RequestsDefaultArgs> = z.object({
  select: z.lazy(() => RequestsSelectSchema).optional(),
  include: z.lazy(() => RequestsIncludeSchema).optional(),
}).strict();

export default RequestsArgsSchema;
