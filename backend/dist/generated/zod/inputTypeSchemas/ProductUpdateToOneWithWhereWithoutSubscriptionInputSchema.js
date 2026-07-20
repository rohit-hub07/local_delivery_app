import { z } from 'zod';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
import { ProductUpdateWithoutSubscriptionInputSchema } from './ProductUpdateWithoutSubscriptionInputSchema';
import { ProductUncheckedUpdateWithoutSubscriptionInputSchema } from './ProductUncheckedUpdateWithoutSubscriptionInputSchema';
export const ProductUpdateToOneWithWhereWithoutSubscriptionInputSchema = z.strictObject({
    where: z.lazy(() => ProductWhereInputSchema).optional(),
    data: z.union([z.lazy(() => ProductUpdateWithoutSubscriptionInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutSubscriptionInputSchema)]),
});
export default ProductUpdateToOneWithWhereWithoutSubscriptionInputSchema;
