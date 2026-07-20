import { z } from 'zod';
import { ProductCreateWithoutSubscriptionInputSchema } from './ProductCreateWithoutSubscriptionInputSchema';
import { ProductUncheckedCreateWithoutSubscriptionInputSchema } from './ProductUncheckedCreateWithoutSubscriptionInputSchema';
import { ProductCreateOrConnectWithoutSubscriptionInputSchema } from './ProductCreateOrConnectWithoutSubscriptionInputSchema';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
export const ProductCreateNestedOneWithoutSubscriptionInputSchema = z.strictObject({
    create: z.union([z.lazy(() => ProductCreateWithoutSubscriptionInputSchema), z.lazy(() => ProductUncheckedCreateWithoutSubscriptionInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutSubscriptionInputSchema).optional(),
    connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
});
export default ProductCreateNestedOneWithoutSubscriptionInputSchema;
