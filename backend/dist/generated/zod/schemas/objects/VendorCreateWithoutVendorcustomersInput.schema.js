import * as z from 'zod';
import { UserCreateNestedOneWithoutVendorInputObjectSchema as UserCreateNestedOneWithoutVendorInputObjectSchema } from './UserCreateNestedOneWithoutVendorInput.schema';
import { ProductCreateNestedManyWithoutVendorInputObjectSchema as ProductCreateNestedManyWithoutVendorInputObjectSchema } from './ProductCreateNestedManyWithoutVendorInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    businessName: z.string(),
    businessPhone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutVendorInputObjectSchema),
    product: z.lazy(() => ProductCreateNestedManyWithoutVendorInputObjectSchema).optional()
}).strict();
export const VendorCreateWithoutVendorcustomersInputObjectSchema = makeSchema();
export const VendorCreateWithoutVendorcustomersInputObjectZodSchema = makeSchema();
