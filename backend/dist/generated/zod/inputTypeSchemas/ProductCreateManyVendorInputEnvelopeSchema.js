import { z } from 'zod';
import { ProductCreateManyVendorInputSchema } from './ProductCreateManyVendorInputSchema';
export const ProductCreateManyVendorInputEnvelopeSchema = z.strictObject({
    data: z.union([z.lazy(() => ProductCreateManyVendorInputSchema), z.lazy(() => ProductCreateManyVendorInputSchema).array()]),
    skipDuplicates: z.boolean().optional(),
});
export default ProductCreateManyVendorInputEnvelopeSchema;
