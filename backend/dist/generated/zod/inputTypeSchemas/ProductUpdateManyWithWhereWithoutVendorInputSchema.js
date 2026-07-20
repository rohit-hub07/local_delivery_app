import { z } from 'zod';
import { ProductScalarWhereInputSchema } from './ProductScalarWhereInputSchema';
import { ProductUpdateManyMutationInputSchema } from './ProductUpdateManyMutationInputSchema';
import { ProductUncheckedUpdateManyWithoutVendorInputSchema } from './ProductUncheckedUpdateManyWithoutVendorInputSchema';
export const ProductUpdateManyWithWhereWithoutVendorInputSchema = z.strictObject({
    where: z.lazy(() => ProductScalarWhereInputSchema),
    data: z.union([z.lazy(() => ProductUpdateManyMutationInputSchema), z.lazy(() => ProductUncheckedUpdateManyWithoutVendorInputSchema)]),
});
export default ProductUpdateManyWithWhereWithoutVendorInputSchema;
