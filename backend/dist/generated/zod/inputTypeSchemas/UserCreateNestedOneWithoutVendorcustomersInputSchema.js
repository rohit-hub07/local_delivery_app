import { z } from 'zod';
import { UserCreateWithoutVendorcustomersInputSchema } from './UserCreateWithoutVendorcustomersInputSchema';
import { UserUncheckedCreateWithoutVendorcustomersInputSchema } from './UserUncheckedCreateWithoutVendorcustomersInputSchema';
import { UserCreateOrConnectWithoutVendorcustomersInputSchema } from './UserCreateOrConnectWithoutVendorcustomersInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
export const UserCreateNestedOneWithoutVendorcustomersInputSchema = z.strictObject({
    create: z.union([z.lazy(() => UserCreateWithoutVendorcustomersInputSchema), z.lazy(() => UserUncheckedCreateWithoutVendorcustomersInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVendorcustomersInputSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
});
export default UserCreateNestedOneWithoutVendorcustomersInputSchema;
