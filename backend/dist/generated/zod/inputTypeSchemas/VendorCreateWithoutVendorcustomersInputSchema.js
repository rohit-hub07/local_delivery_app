import { z } from 'zod';
import { UserCreateNestedOneWithoutVendorInputSchema } from './UserCreateNestedOneWithoutVendorInputSchema';
import { ProductCreateNestedManyWithoutVendorInputSchema } from './ProductCreateNestedManyWithoutVendorInputSchema';
export const VendorCreateWithoutVendorcustomersInputSchema = z.strictObject({
    id: z.uuid().optional(),
    businessName: z.string().min(2, { message: "Business name must be at least 2 characters long" }),
    businessPhone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutVendorInputSchema),
    product: z.lazy(() => ProductCreateNestedManyWithoutVendorInputSchema).optional(),
});
export default VendorCreateWithoutVendorcustomersInputSchema;
