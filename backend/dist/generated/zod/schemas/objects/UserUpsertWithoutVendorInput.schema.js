import * as z from 'zod';
import { UserUpdateWithoutVendorInputObjectSchema as UserUpdateWithoutVendorInputObjectSchema } from './UserUpdateWithoutVendorInput.schema';
import { UserUncheckedUpdateWithoutVendorInputObjectSchema as UserUncheckedUpdateWithoutVendorInputObjectSchema } from './UserUncheckedUpdateWithoutVendorInput.schema';
import { UserCreateWithoutVendorInputObjectSchema as UserCreateWithoutVendorInputObjectSchema } from './UserCreateWithoutVendorInput.schema';
import { UserUncheckedCreateWithoutVendorInputObjectSchema as UserUncheckedCreateWithoutVendorInputObjectSchema } from './UserUncheckedCreateWithoutVendorInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
const makeSchema = () => z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutVendorInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutVendorInputObjectSchema)]),
    create: z.union([z.lazy(() => UserCreateWithoutVendorInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutVendorInputObjectSchema)]),
    where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutVendorInputObjectSchema = makeSchema();
export const UserUpsertWithoutVendorInputObjectZodSchema = makeSchema();
