import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { VendorOrderByWithRelationInputSchema } from './VendorOrderByWithRelationInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { CustomerSubscriptionOrderByRelationAggregateInputSchema } from './CustomerSubscriptionOrderByRelationAggregateInputSchema';
import { RequestsOrderByRelationAggregateInputSchema } from './RequestsOrderByRelationAggregateInputSchema';
export const VendorCustomersOrderByWithRelationInputSchema = z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    vendorId: z.lazy(() => SortOrderSchema).optional(),
    customerId: z.lazy(() => SortOrderSchema).optional(),
    customerPhone: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    vendor: z.lazy(() => VendorOrderByWithRelationInputSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
    subscription: z.lazy(() => CustomerSubscriptionOrderByRelationAggregateInputSchema).optional(),
    request: z.lazy(() => RequestsOrderByRelationAggregateInputSchema).optional(),
});
export default VendorCustomersOrderByWithRelationInputSchema;
