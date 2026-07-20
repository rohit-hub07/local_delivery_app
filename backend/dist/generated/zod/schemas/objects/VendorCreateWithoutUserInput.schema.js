import * as z from 'zod';
import { ProductCreateNestedManyWithoutVendorInputObjectSchema as ProductCreateNestedManyWithoutVendorInputObjectSchema } from './ProductCreateNestedManyWithoutVendorInput.schema';
import { VendorCustomersCreateNestedManyWithoutVendorInputObjectSchema as VendorCustomersCreateNestedManyWithoutVendorInputObjectSchema } from './VendorCustomersCreateNestedManyWithoutVendorInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    businessName: z.string(),
    businessPhone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    product: z.lazy(() => ProductCreateNestedManyWithoutVendorInputObjectSchema).optional(),
    vendorcustomers: z.lazy(() => VendorCustomersCreateNestedManyWithoutVendorInputObjectSchema).optional()
}).strict();
export const VendorCreateWithoutUserInputObjectSchema = makeSchema();
export const VendorCreateWithoutUserInputObjectZodSchema = makeSchema();
