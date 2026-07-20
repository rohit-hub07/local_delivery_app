import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
import { ProductUpdateWithoutSubscriptionInputSchema } from './ProductUpdateWithoutSubscriptionInputSchema';
import { ProductUncheckedUpdateWithoutSubscriptionInputSchema } from './ProductUncheckedUpdateWithoutSubscriptionInputSchema';

export const ProductUpdateToOneWithWhereWithoutSubscriptionInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutSubscriptionInput> = z.strictObject({
  where: z.lazy(() => ProductWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProductUpdateWithoutSubscriptionInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutSubscriptionInputSchema) ]),
});

export default ProductUpdateToOneWithWhereWithoutSubscriptionInputSchema;
