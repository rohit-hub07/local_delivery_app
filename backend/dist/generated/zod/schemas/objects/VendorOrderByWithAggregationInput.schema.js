import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VendorCountOrderByAggregateInputObjectSchema as VendorCountOrderByAggregateInputObjectSchema } from './VendorCountOrderByAggregateInput.schema';
import { VendorMaxOrderByAggregateInputObjectSchema as VendorMaxOrderByAggregateInputObjectSchema } from './VendorMaxOrderByAggregateInput.schema';
import { VendorMinOrderByAggregateInputObjectSchema as VendorMinOrderByAggregateInputObjectSchema } from './VendorMinOrderByAggregateInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    userId: SortOrderSchema.optional(),
    businessName: SortOrderSchema.optional(),
    businessPhone: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    _count: z.lazy(() => VendorCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => VendorMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => VendorMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const VendorOrderByWithAggregationInputObjectSchema = makeSchema();
export const VendorOrderByWithAggregationInputObjectZodSchema = makeSchema();
