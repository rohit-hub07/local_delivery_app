import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VendorCustomersOrderByWithRelationInputObjectSchema as VendorCustomersOrderByWithRelationInputObjectSchema } from './VendorCustomersOrderByWithRelationInput.schema';
import { ProductOrderByWithRelationInputObjectSchema as ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    vendorCustomerId: SortOrderSchema.optional(),
    productId: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    vendorCustomers: z.lazy(() => VendorCustomersOrderByWithRelationInputObjectSchema).optional(),
    product: z.lazy(() => ProductOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const CustomerSubscriptionOrderByWithRelationInputObjectSchema = makeSchema();
export const CustomerSubscriptionOrderByWithRelationInputObjectZodSchema = makeSchema();
