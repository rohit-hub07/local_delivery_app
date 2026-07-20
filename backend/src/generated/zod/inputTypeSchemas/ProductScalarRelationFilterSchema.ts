import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';

export const ProductScalarRelationFilterSchema: z.ZodType<Prisma.ProductScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => ProductWhereInputSchema).optional(),
  isNot: z.lazy(() => ProductWhereInputSchema).optional(),
});

export default ProductScalarRelationFilterSchema;
