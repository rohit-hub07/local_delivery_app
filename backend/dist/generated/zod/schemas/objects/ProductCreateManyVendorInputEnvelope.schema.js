import * as z from 'zod';
import { ProductCreateManyVendorInputObjectSchema as ProductCreateManyVendorInputObjectSchema } from './ProductCreateManyVendorInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => ProductCreateManyVendorInputObjectSchema), z.lazy(() => ProductCreateManyVendorInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const ProductCreateManyVendorInputEnvelopeObjectSchema = makeSchema();
export const ProductCreateManyVendorInputEnvelopeObjectZodSchema = makeSchema();
