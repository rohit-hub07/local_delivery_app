import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { ProductOrderByRelationAggregateInputSchema } from './ProductOrderByRelationAggregateInputSchema';
import { VendorCustomersOrderByRelationAggregateInputSchema } from './VendorCustomersOrderByRelationAggregateInputSchema';
export const VendorOrderByWithRelationInputSchema = z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    businessName: z.lazy(() => SortOrderSchema).optional(),
    businessPhone: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
    product: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional(),
    vendorcustomers: z.lazy(() => VendorCustomersOrderByRelationAggregateInputSchema).optional(),
});
export default VendorOrderByWithRelationInputSchema;
