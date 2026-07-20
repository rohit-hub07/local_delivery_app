import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ProductUpdateWithoutSubscriptionInputSchema } from './ProductUpdateWithoutSubscriptionInputSchema';
import { ProductUncheckedUpdateWithoutSubscriptionInputSchema } from './ProductUncheckedUpdateWithoutSubscriptionInputSchema';
import { ProductCreateWithoutSubscriptionInputSchema } from './ProductCreateWithoutSubscriptionInputSchema';
import { ProductUncheckedCreateWithoutSubscriptionInputSchema } from './ProductUncheckedCreateWithoutSubscriptionInputSchema';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';

export const ProductUpsertWithoutSubscriptionInputSchema: z.ZodType<Prisma.ProductUpsertWithoutSubscriptionInput> = z.strictObject({
  update: z.union([ z.lazy(() => ProductUpdateWithoutSubscriptionInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutSubscriptionInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutSubscriptionInputSchema), z.lazy(() => ProductUncheckedCreateWithoutSubscriptionInputSchema) ]),
  where: z.lazy(() => ProductWhereInputSchema).optional(),
});

export default ProductUpsertWithoutSubscriptionInputSchema;
