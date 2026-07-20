import { z } from 'zod';
import { UserCreateWithoutVendorInputSchema } from './UserCreateWithoutVendorInputSchema';
import { UserUncheckedCreateWithoutVendorInputSchema } from './UserUncheckedCreateWithoutVendorInputSchema';
import { UserCreateOrConnectWithoutVendorInputSchema } from './UserCreateOrConnectWithoutVendorInputSchema';
import { UserUpsertWithoutVendorInputSchema } from './UserUpsertWithoutVendorInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutVendorInputSchema } from './UserUpdateToOneWithWhereWithoutVendorInputSchema';
import { UserUpdateWithoutVendorInputSchema } from './UserUpdateWithoutVendorInputSchema';
import { UserUncheckedUpdateWithoutVendorInputSchema } from './UserUncheckedUpdateWithoutVendorInputSchema';
export const UserUpdateOneRequiredWithoutVendorNestedInputSchema = z.strictObject({
    create: z.union([z.lazy(() => UserCreateWithoutVendorInputSchema), z.lazy(() => UserUncheckedCreateWithoutVendorInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVendorInputSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutVendorInputSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutVendorInputSchema), z.lazy(() => UserUpdateWithoutVendorInputSchema), z.lazy(() => UserUncheckedUpdateWithoutVendorInputSchema)]).optional(),
});
export default UserUpdateOneRequiredWithoutVendorNestedInputSchema;
