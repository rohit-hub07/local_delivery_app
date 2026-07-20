import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { VendorUncheckedCreateNestedOneWithoutUserInputSchema } from './VendorUncheckedCreateNestedOneWithoutUserInputSchema';
import { VendorCustomersUncheckedCreateNestedManyWithoutUserInputSchema } from './VendorCustomersUncheckedCreateNestedManyWithoutUserInputSchema';
export const UserUncheckedCreateInputSchema = z.strictObject({
    id: z.uuid().optional(),
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
    address: z.string(),
    role: z.lazy(() => RoleSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    vendor: z.lazy(() => VendorUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
    vendorcustomers: z.lazy(() => VendorCustomersUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
});
export default UserUncheckedCreateInputSchema;
