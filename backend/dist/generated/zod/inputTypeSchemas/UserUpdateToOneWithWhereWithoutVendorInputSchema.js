import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutVendorInputSchema } from './UserUpdateWithoutVendorInputSchema';
import { UserUncheckedUpdateWithoutVendorInputSchema } from './UserUncheckedUpdateWithoutVendorInputSchema';
export const UserUpdateToOneWithWhereWithoutVendorInputSchema = z.strictObject({
    where: z.lazy(() => UserWhereInputSchema).optional(),
    data: z.union([z.lazy(() => UserUpdateWithoutVendorInputSchema), z.lazy(() => UserUncheckedUpdateWithoutVendorInputSchema)]),
});
export default UserUpdateToOneWithWhereWithoutVendorInputSchema;
