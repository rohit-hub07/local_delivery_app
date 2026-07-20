import { z } from 'zod';
import { ProductUpdateWithoutRequestInputSchema } from './ProductUpdateWithoutRequestInputSchema';
import { ProductUncheckedUpdateWithoutRequestInputSchema } from './ProductUncheckedUpdateWithoutRequestInputSchema';
import { ProductCreateWithoutRequestInputSchema } from './ProductCreateWithoutRequestInputSchema';
import { ProductUncheckedCreateWithoutRequestInputSchema } from './ProductUncheckedCreateWithoutRequestInputSchema';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
export const ProductUpsertWithoutRequestInputSchema = z.strictObject({
    update: z.union([z.lazy(() => ProductUpdateWithoutRequestInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutRequestInputSchema)]),
    create: z.union([z.lazy(() => ProductCreateWithoutRequestInputSchema), z.lazy(() => ProductUncheckedCreateWithoutRequestInputSchema)]),
    where: z.lazy(() => ProductWhereInputSchema).optional(),
});
export default ProductUpsertWithoutRequestInputSchema;
