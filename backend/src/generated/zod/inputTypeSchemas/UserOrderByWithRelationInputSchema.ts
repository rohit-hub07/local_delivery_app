import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { VendorOrderByWithRelationInputSchema } from './VendorOrderByWithRelationInputSchema';
import { VendorCustomersOrderByRelationAggregateInputSchema } from './VendorCustomersOrderByRelationAggregateInputSchema';

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  vendor: z.lazy(() => VendorOrderByWithRelationInputSchema).optional(),
  vendorcustomers: z.lazy(() => VendorCustomersOrderByRelationAggregateInputSchema).optional(),
});

export default UserOrderByWithRelationInputSchema;
