import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutVendorInputObjectSchema as UserCreateWithoutVendorInputObjectSchema } from './UserCreateWithoutVendorInput.schema';
import { UserUncheckedCreateWithoutVendorInputObjectSchema as UserUncheckedCreateWithoutVendorInputObjectSchema } from './UserUncheckedCreateWithoutVendorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutVendorInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutVendorInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutVendorInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutVendorInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutVendorInput>;
export const UserCreateOrConnectWithoutVendorInputObjectZodSchema = makeSchema();
