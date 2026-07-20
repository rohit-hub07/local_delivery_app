import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    userId: SortOrderSchema.optional(),
    businessName: SortOrderSchema.optional(),
    businessPhone: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const VendorMaxOrderByAggregateInputObjectSchema = makeSchema();
export const VendorMaxOrderByAggregateInputObjectZodSchema = makeSchema();
