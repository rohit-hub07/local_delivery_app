import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    vendorId: SortOrderSchema.optional(),
    customerId: SortOrderSchema.optional(),
    customerPhone: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const VendorCustomersMaxOrderByAggregateInputObjectSchema = makeSchema();
export const VendorCustomersMaxOrderByAggregateInputObjectZodSchema = makeSchema();
