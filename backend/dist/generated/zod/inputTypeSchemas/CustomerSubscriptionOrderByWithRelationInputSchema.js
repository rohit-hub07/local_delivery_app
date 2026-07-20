import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { VendorCustomersOrderByWithRelationInputSchema } from './VendorCustomersOrderByWithRelationInputSchema';
import { ProductOrderByWithRelationInputSchema } from './ProductOrderByWithRelationInputSchema';
export const CustomerSubscriptionOrderByWithRelationInputSchema = z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    vendorCustomerId: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    vendorCustomers: z.lazy(() => VendorCustomersOrderByWithRelationInputSchema).optional(),
    product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional(),
});
export default CustomerSubscriptionOrderByWithRelationInputSchema;
