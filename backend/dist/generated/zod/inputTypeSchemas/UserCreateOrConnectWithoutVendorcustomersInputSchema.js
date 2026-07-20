import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutVendorcustomersInputSchema } from './UserCreateWithoutVendorcustomersInputSchema';
import { UserUncheckedCreateWithoutVendorcustomersInputSchema } from './UserUncheckedCreateWithoutVendorcustomersInputSchema';
export const UserCreateOrConnectWithoutVendorcustomersInputSchema = z.strictObject({
    where: z.lazy(() => UserWhereUniqueInputSchema),
    create: z.union([z.lazy(() => UserCreateWithoutVendorcustomersInputSchema), z.lazy(() => UserUncheckedCreateWithoutVendorcustomersInputSchema)]),
});
export default UserCreateOrConnectWithoutVendorcustomersInputSchema;
