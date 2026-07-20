import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { VendorCustomersCountOrderByAggregateInputSchema } from './VendorCustomersCountOrderByAggregateInputSchema';
import { VendorCustomersMaxOrderByAggregateInputSchema } from './VendorCustomersMaxOrderByAggregateInputSchema';
import { VendorCustomersMinOrderByAggregateInputSchema } from './VendorCustomersMinOrderByAggregateInputSchema';

export const VendorCustomersOrderByWithAggregationInputSchema: z.ZodType<Prisma.VendorCustomersOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  vendorId: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
  customerPhone: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VendorCustomersCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VendorCustomersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VendorCustomersMinOrderByAggregateInputSchema).optional(),
});

export default VendorCustomersOrderByWithAggregationInputSchema;
