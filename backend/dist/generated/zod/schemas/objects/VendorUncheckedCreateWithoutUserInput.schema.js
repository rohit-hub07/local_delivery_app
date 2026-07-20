import * as z from 'zod';
import { ProductUncheckedCreateNestedManyWithoutVendorInputObjectSchema as ProductUncheckedCreateNestedManyWithoutVendorInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutVendorInput.schema';
import { VendorCustomersUncheckedCreateNestedManyWithoutVendorInputObjectSchema as VendorCustomersUncheckedCreateNestedManyWithoutVendorInputObjectSchema } from './VendorCustomersUncheckedCreateNestedManyWithoutVendorInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    businessName: z.string(),
    businessPhone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    product: z.lazy(() => ProductUncheckedCreateNestedManyWithoutVendorInputObjectSchema).optional(),
    vendorcustomers: z.lazy(() => VendorCustomersUncheckedCreateNestedManyWithoutVendorInputObjectSchema).optional()
}).strict();
export const VendorUncheckedCreateWithoutUserInputObjectSchema = makeSchema();
export const VendorUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
