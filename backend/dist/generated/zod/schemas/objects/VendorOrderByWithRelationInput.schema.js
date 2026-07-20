import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ProductOrderByRelationAggregateInputObjectSchema as ProductOrderByRelationAggregateInputObjectSchema } from './ProductOrderByRelationAggregateInput.schema';
import { VendorCustomersOrderByRelationAggregateInputObjectSchema as VendorCustomersOrderByRelationAggregateInputObjectSchema } from './VendorCustomersOrderByRelationAggregateInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    userId: SortOrderSchema.optional(),
    businessName: SortOrderSchema.optional(),
    businessPhone: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    product: z.lazy(() => ProductOrderByRelationAggregateInputObjectSchema).optional(),
    vendorcustomers: z.lazy(() => VendorCustomersOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const VendorOrderByWithRelationInputObjectSchema = makeSchema();
export const VendorOrderByWithRelationInputObjectZodSchema = makeSchema();
