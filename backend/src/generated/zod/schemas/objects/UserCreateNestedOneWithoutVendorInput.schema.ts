import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutVendorInputObjectSchema as UserCreateWithoutVendorInputObjectSchema } from './UserCreateWithoutVendorInput.schema';
import { UserUncheckedCreateWithoutVendorInputObjectSchema as UserUncheckedCreateWithoutVendorInputObjectSchema } from './UserUncheckedCreateWithoutVendorInput.schema';
import { UserCreateOrConnectWithoutVendorInputObjectSchema as UserCreateOrConnectWithoutVendorInputObjectSchema } from './UserCreateOrConnectWithoutVendorInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutVendorInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutVendorInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVendorInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutVendorInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutVendorInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutVendorInput>;
export const UserCreateNestedOneWithoutVendorInputObjectZodSchema = makeSchema();
