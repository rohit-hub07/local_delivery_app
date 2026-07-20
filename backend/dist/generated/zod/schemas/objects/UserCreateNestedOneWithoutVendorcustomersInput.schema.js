import * as z from 'zod';
import { UserCreateWithoutVendorcustomersInputObjectSchema as UserCreateWithoutVendorcustomersInputObjectSchema } from './UserCreateWithoutVendorcustomersInput.schema';
import { UserUncheckedCreateWithoutVendorcustomersInputObjectSchema as UserUncheckedCreateWithoutVendorcustomersInputObjectSchema } from './UserUncheckedCreateWithoutVendorcustomersInput.schema';
import { UserCreateOrConnectWithoutVendorcustomersInputObjectSchema as UserCreateOrConnectWithoutVendorcustomersInputObjectSchema } from './UserCreateOrConnectWithoutVendorcustomersInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => UserCreateWithoutVendorcustomersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutVendorcustomersInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVendorcustomersInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutVendorcustomersInputObjectSchema = makeSchema();
export const UserCreateNestedOneWithoutVendorcustomersInputObjectZodSchema = makeSchema();
