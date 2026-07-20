import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
    phone: SortOrderSchema.optional(),
    address: SortOrderSchema.optional(),
    role: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const UserMinOrderByAggregateInputObjectSchema = makeSchema();
export const UserMinOrderByAggregateInputObjectZodSchema = makeSchema();
