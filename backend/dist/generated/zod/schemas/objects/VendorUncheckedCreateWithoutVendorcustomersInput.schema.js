import * as z from 'zod';
import { ProductUncheckedCreateNestedManyWithoutVendorInputObjectSchema as ProductUncheckedCreateNestedManyWithoutVendorInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutVendorInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    userId: z.string(),
    businessName: z.string(),
    businessPhone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    product: z.lazy(() => ProductUncheckedCreateNestedManyWithoutVendorInputObjectSchema).optional()
}).strict();
export const VendorUncheckedCreateWithoutVendorcustomersInputObjectSchema = makeSchema();
export const VendorUncheckedCreateWithoutVendorcustomersInputObjectZodSchema = makeSchema();
