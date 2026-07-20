import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VendorOrderByWithRelationInputObjectSchema as VendorOrderByWithRelationInputObjectSchema } from './VendorOrderByWithRelationInput.schema';
import { VendorCustomersOrderByRelationAggregateInputObjectSchema as VendorCustomersOrderByRelationAggregateInputObjectSchema } from './VendorCustomersOrderByRelationAggregateInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
    phone: SortOrderSchema.optional(),
    address: SortOrderSchema.optional(),
    role: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    vendor: z.lazy(() => VendorOrderByWithRelationInputObjectSchema).optional(),
    vendorcustomers: z.lazy(() => VendorCustomersOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema = makeSchema();
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
