import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutVendorcustomersInputObjectSchema as UserUpdateWithoutVendorcustomersInputObjectSchema } from './UserUpdateWithoutVendorcustomersInput.schema';
import { UserUncheckedUpdateWithoutVendorcustomersInputObjectSchema as UserUncheckedUpdateWithoutVendorcustomersInputObjectSchema } from './UserUncheckedUpdateWithoutVendorcustomersInput.schema';
import { UserCreateWithoutVendorcustomersInputObjectSchema as UserCreateWithoutVendorcustomersInputObjectSchema } from './UserCreateWithoutVendorcustomersInput.schema';
import { UserUncheckedCreateWithoutVendorcustomersInputObjectSchema as UserUncheckedCreateWithoutVendorcustomersInputObjectSchema } from './UserUncheckedCreateWithoutVendorcustomersInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutVendorcustomersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutVendorcustomersInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutVendorcustomersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutVendorcustomersInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutVendorcustomersInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutVendorcustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutVendorcustomersInput>;
export const UserUpsertWithoutVendorcustomersInputObjectZodSchema = makeSchema();
