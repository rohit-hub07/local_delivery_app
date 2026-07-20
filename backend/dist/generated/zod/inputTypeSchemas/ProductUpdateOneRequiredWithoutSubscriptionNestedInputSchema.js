import { z } from 'zod';
import { ProductCreateWithoutSubscriptionInputSchema } from './ProductCreateWithoutSubscriptionInputSchema';
import { ProductUncheckedCreateWithoutSubscriptionInputSchema } from './ProductUncheckedCreateWithoutSubscriptionInputSchema';
import { ProductCreateOrConnectWithoutSubscriptionInputSchema } from './ProductCreateOrConnectWithoutSubscriptionInputSchema';
import { ProductUpsertWithoutSubscriptionInputSchema } from './ProductUpsertWithoutSubscriptionInputSchema';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductUpdateToOneWithWhereWithoutSubscriptionInputSchema } from './ProductUpdateToOneWithWhereWithoutSubscriptionInputSchema';
import { ProductUpdateWithoutSubscriptionInputSchema } from './ProductUpdateWithoutSubscriptionInputSchema';
import { ProductUncheckedUpdateWithoutSubscriptionInputSchema } from './ProductUncheckedUpdateWithoutSubscriptionInputSchema';
export const ProductUpdateOneRequiredWithoutSubscriptionNestedInputSchema = z.strictObject({
    create: z.union([z.lazy(() => ProductCreateWithoutSubscriptionInputSchema), z.lazy(() => ProductUncheckedCreateWithoutSubscriptionInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutSubscriptionInputSchema).optional(),
    upsert: z.lazy(() => ProductUpsertWithoutSubscriptionInputSchema).optional(),
    connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
    update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutSubscriptionInputSchema), z.lazy(() => ProductUpdateWithoutSubscriptionInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutSubscriptionInputSchema)]).optional(),
});
export default ProductUpdateOneRequiredWithoutSubscriptionNestedInputSchema;
