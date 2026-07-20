import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  businessName: SortOrderSchema.optional(),
  businessPhone: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const VendorCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VendorCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCountOrderByAggregateInput>;
export const VendorCountOrderByAggregateInputObjectZodSchema = makeSchema();
