import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutVendorInputObjectSchema as UserUpdateWithoutVendorInputObjectSchema } from './UserUpdateWithoutVendorInput.schema';
import { UserUncheckedUpdateWithoutVendorInputObjectSchema as UserUncheckedUpdateWithoutVendorInputObjectSchema } from './UserUncheckedUpdateWithoutVendorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutVendorInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutVendorInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutVendorInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutVendorInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutVendorInput>;
export const UserUpdateToOneWithWhereWithoutVendorInputObjectZodSchema = makeSchema();
