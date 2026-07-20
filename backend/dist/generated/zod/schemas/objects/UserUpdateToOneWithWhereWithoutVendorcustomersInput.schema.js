import * as z from 'zod';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutVendorcustomersInputObjectSchema as UserUpdateWithoutVendorcustomersInputObjectSchema } from './UserUpdateWithoutVendorcustomersInput.schema';
import { UserUncheckedUpdateWithoutVendorcustomersInputObjectSchema as UserUncheckedUpdateWithoutVendorcustomersInputObjectSchema } from './UserUncheckedUpdateWithoutVendorcustomersInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => UserUpdateWithoutVendorcustomersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutVendorcustomersInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutVendorcustomersInputObjectSchema = makeSchema();
export const UserUpdateToOneWithWhereWithoutVendorcustomersInputObjectZodSchema = makeSchema();
