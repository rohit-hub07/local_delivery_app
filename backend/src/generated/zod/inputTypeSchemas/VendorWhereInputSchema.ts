import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { ProductListRelationFilterSchema } from './ProductListRelationFilterSchema';
import { VendorCustomersListRelationFilterSchema } from './VendorCustomersListRelationFilterSchema';

export const VendorWhereInputSchema: z.ZodType<Prisma.VendorWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => VendorWhereInputSchema), z.lazy(() => VendorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VendorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VendorWhereInputSchema), z.lazy(() => VendorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  businessName: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  businessPhone: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional(),
  product: z.lazy(() => ProductListRelationFilterSchema).optional(),
  vendorcustomers: z.lazy(() => VendorCustomersListRelationFilterSchema).optional(),
});

export default VendorWhereInputSchema;
