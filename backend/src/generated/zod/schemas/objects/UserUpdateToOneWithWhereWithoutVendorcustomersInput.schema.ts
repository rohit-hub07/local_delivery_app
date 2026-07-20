import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutVendorcustomersInputObjectSchema as UserUpdateWithoutVendorcustomersInputObjectSchema } from './UserUpdateWithoutVendorcustomersInput.schema';
import { UserUncheckedUpdateWithoutVendorcustomersInputObjectSchema as UserUncheckedUpdateWithoutVendorcustomersInputObjectSchema } from './UserUncheckedUpdateWithoutVendorcustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutVendorcustomersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutVendorcustomersInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutVendorcustomersInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutVendorcustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutVendorcustomersInput>;
export const UserUpdateToOneWithWhereWithoutVendorcustomersInputObjectZodSchema = makeSchema();
