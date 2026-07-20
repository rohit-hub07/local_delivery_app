import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';

export const ProductListRelationFilterSchema: z.ZodType<Prisma.ProductListRelationFilter> = z.strictObject({
  every: z.lazy(() => ProductWhereInputSchema).optional(),
  some: z.lazy(() => ProductWhereInputSchema).optional(),
  none: z.lazy(() => ProductWhereInputSchema).optional(),
});

export default ProductListRelationFilterSchema;
