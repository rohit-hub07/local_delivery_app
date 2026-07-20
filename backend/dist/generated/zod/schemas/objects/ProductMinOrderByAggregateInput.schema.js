import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    vendorId: SortOrderSchema.optional(),
    productName: SortOrderSchema.optional(),
    description: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const ProductMinOrderByAggregateInputObjectSchema = makeSchema();
export const ProductMinOrderByAggregateInputObjectZodSchema = makeSchema();
