import * as z from 'zod';
import { UserCreateNestedOneWithoutVendorInputObjectSchema as UserCreateNestedOneWithoutVendorInputObjectSchema } from './UserCreateNestedOneWithoutVendorInput.schema';
import { ProductCreateNestedManyWithoutVendorInputObjectSchema as ProductCreateNestedManyWithoutVendorInputObjectSchema } from './ProductCreateNestedManyWithoutVendorInput.schema';
import { VendorCustomersCreateNestedManyWithoutVendorInputObjectSchema as VendorCustomersCreateNestedManyWithoutVendorInputObjectSchema } from './VendorCustomersCreateNestedManyWithoutVendorInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    businessName: z.string(),
    businessPhone: z.string(),
    createdAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutVendorInputObjectSchema),
    product: z.lazy(() => ProductCreateNestedManyWithoutVendorInputObjectSchema).optional(),
    vendorcustomers: z.lazy(() => VendorCustomersCreateNestedManyWithoutVendorInputObjectSchema).optional()
}).strict();
export const VendorCreateInputObjectSchema = makeSchema();
export const VendorCreateInputObjectZodSchema = makeSchema();
