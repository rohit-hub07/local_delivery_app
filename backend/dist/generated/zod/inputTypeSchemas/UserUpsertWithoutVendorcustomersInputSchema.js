import { z } from 'zod';
import { UserUpdateWithoutVendorcustomersInputSchema } from './UserUpdateWithoutVendorcustomersInputSchema';
import { UserUncheckedUpdateWithoutVendorcustomersInputSchema } from './UserUncheckedUpdateWithoutVendorcustomersInputSchema';
import { UserCreateWithoutVendorcustomersInputSchema } from './UserCreateWithoutVendorcustomersInputSchema';
import { UserUncheckedCreateWithoutVendorcustomersInputSchema } from './UserUncheckedCreateWithoutVendorcustomersInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
export const UserUpsertWithoutVendorcustomersInputSchema = z.strictObject({
    update: z.union([z.lazy(() => UserUpdateWithoutVendorcustomersInputSchema), z.lazy(() => UserUncheckedUpdateWithoutVendorcustomersInputSchema)]),
    create: z.union([z.lazy(() => UserCreateWithoutVendorcustomersInputSchema), z.lazy(() => UserUncheckedCreateWithoutVendorcustomersInputSchema)]),
    where: z.lazy(() => UserWhereInputSchema).optional(),
});
export default UserUpsertWithoutVendorcustomersInputSchema;
