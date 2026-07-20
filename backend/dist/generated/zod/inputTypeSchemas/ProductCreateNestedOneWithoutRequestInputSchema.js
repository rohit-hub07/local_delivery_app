import { z } from 'zod';
import { ProductCreateWithoutRequestInputSchema } from './ProductCreateWithoutRequestInputSchema';
import { ProductUncheckedCreateWithoutRequestInputSchema } from './ProductUncheckedCreateWithoutRequestInputSchema';
import { ProductCreateOrConnectWithoutRequestInputSchema } from './ProductCreateOrConnectWithoutRequestInputSchema';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
export const ProductCreateNestedOneWithoutRequestInputSchema = z.strictObject({
    create: z.union([z.lazy(() => ProductCreateWithoutRequestInputSchema), z.lazy(() => ProductUncheckedCreateWithoutRequestInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutRequestInputSchema).optional(),
    connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
});
export default ProductCreateNestedOneWithoutRequestInputSchema;
