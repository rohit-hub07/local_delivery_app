import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { RequestsCountOrderByAggregateInputSchema } from './RequestsCountOrderByAggregateInputSchema';
import { RequestsMaxOrderByAggregateInputSchema } from './RequestsMaxOrderByAggregateInputSchema';
import { RequestsMinOrderByAggregateInputSchema } from './RequestsMinOrderByAggregateInputSchema';

export const RequestsOrderByWithAggregationInputSchema: z.ZodType<Prisma.RequestsOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  vendorCustomerId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  start_date: z.lazy(() => SortOrderSchema).optional(),
  end_date: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  respondedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RequestsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RequestsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RequestsMinOrderByAggregateInputSchema).optional(),
});

export default RequestsOrderByWithAggregationInputSchema;
