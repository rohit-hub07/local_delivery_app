import { z } from 'zod';
import { UserCreateWithoutVendorInputSchema } from './UserCreateWithoutVendorInputSchema';
import { UserUncheckedCreateWithoutVendorInputSchema } from './UserUncheckedCreateWithoutVendorInputSchema';
import { UserCreateOrConnectWithoutVendorInputSchema } from './UserCreateOrConnectWithoutVendorInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
export const UserCreateNestedOneWithoutVendorInputSchema = z.strictObject({
    create: z.union([z.lazy(() => UserCreateWithoutVendorInputSchema), z.lazy(() => UserUncheckedCreateWithoutVendorInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVendorInputSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
});
export default UserCreateNestedOneWithoutVendorInputSchema;
