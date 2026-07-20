import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { VendorCountOrderByAggregateInputSchema } from './VendorCountOrderByAggregateInputSchema';
import { VendorMaxOrderByAggregateInputSchema } from './VendorMaxOrderByAggregateInputSchema';
import { VendorMinOrderByAggregateInputSchema } from './VendorMinOrderByAggregateInputSchema';

export const VendorOrderByWithAggregationInputSchema: z.ZodType<Prisma.VendorOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  businessName: z.lazy(() => SortOrderSchema).optional(),
  businessPhone: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VendorCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VendorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VendorMinOrderByAggregateInputSchema).optional(),
});

export default VendorOrderByWithAggregationInputSchema;
