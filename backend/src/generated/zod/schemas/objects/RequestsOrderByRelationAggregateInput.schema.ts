import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const RequestsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.RequestsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsOrderByRelationAggregateInput>;
export const RequestsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
