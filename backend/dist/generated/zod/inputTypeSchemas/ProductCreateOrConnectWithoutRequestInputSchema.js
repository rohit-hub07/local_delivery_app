import { z } from 'zod';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductCreateWithoutRequestInputSchema } from './ProductCreateWithoutRequestInputSchema';
import { ProductUncheckedCreateWithoutRequestInputSchema } from './ProductUncheckedCreateWithoutRequestInputSchema';
export const ProductCreateOrConnectWithoutRequestInputSchema = z.strictObject({
    where: z.lazy(() => ProductWhereUniqueInputSchema),
    create: z.union([z.lazy(() => ProductCreateWithoutRequestInputSchema), z.lazy(() => ProductUncheckedCreateWithoutRequestInputSchema)]),
});
export default ProductCreateOrConnectWithoutRequestInputSchema;
