import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RequestsSelectObjectSchema as RequestsSelectObjectSchema } from './RequestsSelect.schema';
import { RequestsIncludeObjectSchema as RequestsIncludeObjectSchema } from './RequestsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RequestsSelectObjectSchema).optional(),
  include: z.lazy(() => RequestsIncludeObjectSchema).optional()
}).strict();
export const RequestsArgsObjectSchema = makeSchema();
export const RequestsArgsObjectZodSchema = makeSchema();
