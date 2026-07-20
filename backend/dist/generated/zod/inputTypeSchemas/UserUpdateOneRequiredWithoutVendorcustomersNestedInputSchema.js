import { z } from 'zod';
import { UserCreateWithoutVendorcustomersInputSchema } from './UserCreateWithoutVendorcustomersInputSchema';
import { UserUncheckedCreateWithoutVendorcustomersInputSchema } from './UserUncheckedCreateWithoutVendorcustomersInputSchema';
import { UserCreateOrConnectWithoutVendorcustomersInputSchema } from './UserCreateOrConnectWithoutVendorcustomersInputSchema';
import { UserUpsertWithoutVendorcustomersInputSchema } from './UserUpsertWithoutVendorcustomersInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutVendorcustomersInputSchema } from './UserUpdateToOneWithWhereWithoutVendorcustomersInputSchema';
import { UserUpdateWithoutVendorcustomersInputSchema } from './UserUpdateWithoutVendorcustomersInputSchema';
import { UserUncheckedUpdateWithoutVendorcustomersInputSchema } from './UserUncheckedUpdateWithoutVendorcustomersInputSchema';
export const UserUpdateOneRequiredWithoutVendorcustomersNestedInputSchema = z.strictObject({
    create: z.union([z.lazy(() => UserCreateWithoutVendorcustomersInputSchema), z.lazy(() => UserUncheckedCreateWithoutVendorcustomersInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVendorcustomersInputSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutVendorcustomersInputSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutVendorcustomersInputSchema), z.lazy(() => UserUpdateWithoutVendorcustomersInputSchema), z.lazy(() => UserUncheckedUpdateWithoutVendorcustomersInputSchema)]).optional(),
});
export default UserUpdateOneRequiredWithoutVendorcustomersNestedInputSchema;
