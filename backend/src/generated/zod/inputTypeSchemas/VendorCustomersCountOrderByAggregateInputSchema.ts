import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VendorCustomersCountOrderByAggregateInputSchema: z.ZodType<Prisma.VendorCustomersCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  vendorId: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
  customerPhone: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default VendorCustomersCountOrderByAggregateInputSchema;
