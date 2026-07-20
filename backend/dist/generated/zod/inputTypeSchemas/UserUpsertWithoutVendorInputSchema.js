import { z } from 'zod';
import { UserUpdateWithoutVendorInputSchema } from './UserUpdateWithoutVendorInputSchema';
import { UserUncheckedUpdateWithoutVendorInputSchema } from './UserUncheckedUpdateWithoutVendorInputSchema';
import { UserCreateWithoutVendorInputSchema } from './UserCreateWithoutVendorInputSchema';
import { UserUncheckedCreateWithoutVendorInputSchema } from './UserUncheckedCreateWithoutVendorInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
export const UserUpsertWithoutVendorInputSchema = z.strictObject({
    update: z.union([z.lazy(() => UserUpdateWithoutVendorInputSchema), z.lazy(() => UserUncheckedUpdateWithoutVendorInputSchema)]),
    create: z.union([z.lazy(() => UserCreateWithoutVendorInputSchema), z.lazy(() => UserUncheckedCreateWithoutVendorInputSchema)]),
    where: z.lazy(() => UserWhereInputSchema).optional(),
});
export default UserUpsertWithoutVendorInputSchema;
