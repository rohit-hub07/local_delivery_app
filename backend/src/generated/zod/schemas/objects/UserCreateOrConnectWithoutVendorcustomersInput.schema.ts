import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutVendorcustomersInputObjectSchema as UserCreateWithoutVendorcustomersInputObjectSchema } from './UserCreateWithoutVendorcustomersInput.schema';
import { UserUncheckedCreateWithoutVendorcustomersInputObjectSchema as UserUncheckedCreateWithoutVendorcustomersInputObjectSchema } from './UserUncheckedCreateWithoutVendorcustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutVendorcustomersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutVendorcustomersInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutVendorcustomersInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutVendorcustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutVendorcustomersInput>;
export const UserCreateOrConnectWithoutVendorcustomersInputObjectZodSchema = makeSchema();
