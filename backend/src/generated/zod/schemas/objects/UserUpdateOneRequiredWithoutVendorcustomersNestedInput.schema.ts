import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutVendorcustomersInputObjectSchema as UserCreateWithoutVendorcustomersInputObjectSchema } from './UserCreateWithoutVendorcustomersInput.schema';
import { UserUncheckedCreateWithoutVendorcustomersInputObjectSchema as UserUncheckedCreateWithoutVendorcustomersInputObjectSchema } from './UserUncheckedCreateWithoutVendorcustomersInput.schema';
import { UserCreateOrConnectWithoutVendorcustomersInputObjectSchema as UserCreateOrConnectWithoutVendorcustomersInputObjectSchema } from './UserCreateOrConnectWithoutVendorcustomersInput.schema';
import { UserUpsertWithoutVendorcustomersInputObjectSchema as UserUpsertWithoutVendorcustomersInputObjectSchema } from './UserUpsertWithoutVendorcustomersInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutVendorcustomersInputObjectSchema as UserUpdateToOneWithWhereWithoutVendorcustomersInputObjectSchema } from './UserUpdateToOneWithWhereWithoutVendorcustomersInput.schema';
import { UserUpdateWithoutVendorcustomersInputObjectSchema as UserUpdateWithoutVendorcustomersInputObjectSchema } from './UserUpdateWithoutVendorcustomersInput.schema';
import { UserUncheckedUpdateWithoutVendorcustomersInputObjectSchema as UserUncheckedUpdateWithoutVendorcustomersInputObjectSchema } from './UserUncheckedUpdateWithoutVendorcustomersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutVendorcustomersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutVendorcustomersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVendorcustomersInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutVendorcustomersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutVendorcustomersInputObjectSchema), z.lazy(() => UserUpdateWithoutVendorcustomersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutVendorcustomersInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutVendorcustomersNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutVendorcustomersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutVendorcustomersNestedInput>;
export const UserUpdateOneRequiredWithoutVendorcustomersNestedInputObjectZodSchema = makeSchema();
