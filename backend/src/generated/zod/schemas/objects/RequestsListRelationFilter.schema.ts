import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RequestsWhereInputObjectSchema as RequestsWhereInputObjectSchema } from './RequestsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => RequestsWhereInputObjectSchema).optional(),
  some: z.lazy(() => RequestsWhereInputObjectSchema).optional(),
  none: z.lazy(() => RequestsWhereInputObjectSchema).optional()
}).strict();
export const RequestsListRelationFilterObjectSchema: z.ZodType<Prisma.RequestsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RequestsListRelationFilter>;
export const RequestsListRelationFilterObjectZodSchema = makeSchema();
