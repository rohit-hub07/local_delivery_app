import { z } from 'zod';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductCreateWithoutSubscriptionInputSchema } from './ProductCreateWithoutSubscriptionInputSchema';
import { ProductUncheckedCreateWithoutSubscriptionInputSchema } from './ProductUncheckedCreateWithoutSubscriptionInputSchema';
export const ProductCreateOrConnectWithoutSubscriptionInputSchema = z.strictObject({
    where: z.lazy(() => ProductWhereUniqueInputSchema),
    create: z.union([z.lazy(() => ProductCreateWithoutSubscriptionInputSchema), z.lazy(() => ProductUncheckedCreateWithoutSubscriptionInputSchema)]),
});
export default ProductCreateOrConnectWithoutSubscriptionInputSchema;
