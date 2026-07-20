import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { VendorCustomersOrderByWithRelationInputSchema } from './VendorCustomersOrderByWithRelationInputSchema';
import { ProductOrderByWithRelationInputSchema } from './ProductOrderByWithRelationInputSchema';

export const RequestsOrderByWithRelationInputSchema: z.ZodType<Prisma.RequestsOrderByWithRelationInput> = z.strictObject({
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
  vendorCustomers: z.lazy(() => VendorCustomersOrderByWithRelationInputSchema).optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional(),
});

export default RequestsOrderByWithRelationInputSchema;
