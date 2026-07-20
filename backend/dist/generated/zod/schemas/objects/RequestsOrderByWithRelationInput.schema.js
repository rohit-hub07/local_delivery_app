import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { VendorCustomersOrderByWithRelationInputObjectSchema as VendorCustomersOrderByWithRelationInputObjectSchema } from './VendorCustomersOrderByWithRelationInput.schema';
import { ProductOrderByWithRelationInputObjectSchema as ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    vendorCustomerId: SortOrderSchema.optional(),
    productId: SortOrderSchema.optional(),
    type: SortOrderSchema.optional(),
    message: SortOrderSchema.optional(),
    start_date: SortOrderSchema.optional(),
    end_date: SortOrderSchema.optional(),
    status: SortOrderSchema.optional(),
    respondedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    vendorCustomers: z.lazy(() => VendorCustomersOrderByWithRelationInputObjectSchema).optional(),
    product: z.lazy(() => ProductOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const RequestsOrderByWithRelationInputObjectSchema = makeSchema();
export const RequestsOrderByWithRelationInputObjectZodSchema = makeSchema();
