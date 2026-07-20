import { z } from 'zod';
import { ProductCreateWithoutRequestInputSchema } from './ProductCreateWithoutRequestInputSchema';
import { ProductUncheckedCreateWithoutRequestInputSchema } from './ProductUncheckedCreateWithoutRequestInputSchema';
import { ProductCreateOrConnectWithoutRequestInputSchema } from './ProductCreateOrConnectWithoutRequestInputSchema';
import { ProductUpsertWithoutRequestInputSchema } from './ProductUpsertWithoutRequestInputSchema';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductUpdateToOneWithWhereWithoutRequestInputSchema } from './ProductUpdateToOneWithWhereWithoutRequestInputSchema';
import { ProductUpdateWithoutRequestInputSchema } from './ProductUpdateWithoutRequestInputSchema';
import { ProductUncheckedUpdateWithoutRequestInputSchema } from './ProductUncheckedUpdateWithoutRequestInputSchema';
export const ProductUpdateOneRequiredWithoutRequestNestedInputSchema = z.strictObject({
    create: z.union([z.lazy(() => ProductCreateWithoutRequestInputSchema), z.lazy(() => ProductUncheckedCreateWithoutRequestInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutRequestInputSchema).optional(),
    upsert: z.lazy(() => ProductUpsertWithoutRequestInputSchema).optional(),
    connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
    update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutRequestInputSchema), z.lazy(() => ProductUpdateWithoutRequestInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutRequestInputSchema)]).optional(),
});
export default ProductUpdateOneRequiredWithoutRequestNestedInputSchema;
