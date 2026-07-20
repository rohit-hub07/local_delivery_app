import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutVendorInputObjectSchema as UserCreateWithoutVendorInputObjectSchema } from './UserCreateWithoutVendorInput.schema';
import { UserUncheckedCreateWithoutVendorInputObjectSchema as UserUncheckedCreateWithoutVendorInputObjectSchema } from './UserUncheckedCreateWithoutVendorInput.schema';
import { UserCreateOrConnectWithoutVendorInputObjectSchema as UserCreateOrConnectWithoutVendorInputObjectSchema } from './UserCreateOrConnectWithoutVendorInput.schema';
import { UserUpsertWithoutVendorInputObjectSchema as UserUpsertWithoutVendorInputObjectSchema } from './UserUpsertWithoutVendorInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutVendorInputObjectSchema as UserUpdateToOneWithWhereWithoutVendorInputObjectSchema } from './UserUpdateToOneWithWhereWithoutVendorInput.schema';
import { UserUpdateWithoutVendorInputObjectSchema as UserUpdateWithoutVendorInputObjectSchema } from './UserUpdateWithoutVendorInput.schema';
import { UserUncheckedUpdateWithoutVendorInputObjectSchema as UserUncheckedUpdateWithoutVendorInputObjectSchema } from './UserUncheckedUpdateWithoutVendorInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutVendorInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutVendorInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVendorInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutVendorInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutVendorInputObjectSchema), z.lazy(() => UserUpdateWithoutVendorInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutVendorInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutVendorNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutVendorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutVendorNestedInput>;
export const UserUpdateOneRequiredWithoutVendorNestedInputObjectZodSchema = makeSchema();
