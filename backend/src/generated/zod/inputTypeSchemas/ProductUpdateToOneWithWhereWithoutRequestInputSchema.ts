import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
import { ProductUpdateWithoutRequestInputSchema } from './ProductUpdateWithoutRequestInputSchema';
import { ProductUncheckedUpdateWithoutRequestInputSchema } from './ProductUncheckedUpdateWithoutRequestInputSchema';

export const ProductUpdateToOneWithWhereWithoutRequestInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutRequestInput> = z.strictObject({
  where: z.lazy(() => ProductWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProductUpdateWithoutRequestInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutRequestInputSchema) ]),
});

export default ProductUpdateToOneWithWhereWithoutRequestInputSchema;
