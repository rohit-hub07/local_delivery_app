import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const VendorCustomersOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.VendorCustomersOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersOrderByRelationAggregateInput>;
export const VendorCustomersOrderByRelationAggregateInputObjectZodSchema = makeSchema();
