import { z } from 'zod';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductCreateWithoutVendorInputSchema } from './ProductCreateWithoutVendorInputSchema';
import { ProductUncheckedCreateWithoutVendorInputSchema } from './ProductUncheckedCreateWithoutVendorInputSchema';
export const ProductCreateOrConnectWithoutVendorInputSchema = z.strictObject({
    where: z.lazy(() => ProductWhereUniqueInputSchema),
    create: z.union([z.lazy(() => ProductCreateWithoutVendorInputSchema), z.lazy(() => ProductUncheckedCreateWithoutVendorInputSchema)]),
});
export default ProductCreateOrConnectWithoutVendorInputSchema;
