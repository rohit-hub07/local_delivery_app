import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CustomerSubscriptionCountOrderByAggregateInputSchema } from './CustomerSubscriptionCountOrderByAggregateInputSchema';
import { CustomerSubscriptionMaxOrderByAggregateInputSchema } from './CustomerSubscriptionMaxOrderByAggregateInputSchema';
import { CustomerSubscriptionMinOrderByAggregateInputSchema } from './CustomerSubscriptionMinOrderByAggregateInputSchema';

export const CustomerSubscriptionOrderByWithAggregationInputSchema: z.ZodType<Prisma.CustomerSubscriptionOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  vendorCustomerId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CustomerSubscriptionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CustomerSubscriptionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CustomerSubscriptionMinOrderByAggregateInputSchema).optional(),
});

export default CustomerSubscriptionOrderByWithAggregationInputSchema;
