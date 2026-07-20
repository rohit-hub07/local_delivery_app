import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VendorOrderByWithRelationInputObjectSchema as VendorOrderByWithRelationInputObjectSchema } from './VendorOrderByWithRelationInput.schema';
import { CustomerSubscriptionOrderByRelationAggregateInputObjectSchema as CustomerSubscriptionOrderByRelationAggregateInputObjectSchema } from './CustomerSubscriptionOrderByRelationAggregateInput.schema';
import { RequestsOrderByRelationAggregateInputObjectSchema as RequestsOrderByRelationAggregateInputObjectSchema } from './RequestsOrderByRelationAggregateInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    vendorId: SortOrderSchema.optional(),
    productName: SortOrderSchema.optional(),
    description: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    vendor: z.lazy(() => VendorOrderByWithRelationInputObjectSchema).optional(),
    subscription: z.lazy(() => CustomerSubscriptionOrderByRelationAggregateInputObjectSchema).optional(),
    request: z.lazy(() => RequestsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ProductOrderByWithRelationInputObjectSchema = makeSchema();
export const ProductOrderByWithRelationInputObjectZodSchema = makeSchema();
