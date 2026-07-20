import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { VendorOrderByWithRelationInputSchema } from './VendorOrderByWithRelationInputSchema';
import { CustomerSubscriptionOrderByRelationAggregateInputSchema } from './CustomerSubscriptionOrderByRelationAggregateInputSchema';
import { RequestsOrderByRelationAggregateInputSchema } from './RequestsOrderByRelationAggregateInputSchema';

export const ProductOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  vendorId: z.lazy(() => SortOrderSchema).optional(),
  productName: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  vendor: z.lazy(() => VendorOrderByWithRelationInputSchema).optional(),
  subscription: z.lazy(() => CustomerSubscriptionOrderByRelationAggregateInputSchema).optional(),
  request: z.lazy(() => RequestsOrderByRelationAggregateInputSchema).optional(),
});

export default ProductOrderByWithRelationInputSchema;
