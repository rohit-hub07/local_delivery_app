import * as z from 'zod';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutVendorInputObjectSchema as UserCreateWithoutVendorInputObjectSchema } from './UserCreateWithoutVendorInput.schema';
import { UserUncheckedCreateWithoutVendorInputObjectSchema as UserUncheckedCreateWithoutVendorInputObjectSchema } from './UserUncheckedCreateWithoutVendorInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => UserCreateWithoutVendorInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutVendorInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutVendorInputObjectSchema = makeSchema();
export const UserCreateOrConnectWithoutVendorInputObjectZodSchema = makeSchema();
