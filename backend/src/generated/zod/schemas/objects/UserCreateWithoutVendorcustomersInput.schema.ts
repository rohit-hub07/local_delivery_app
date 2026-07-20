import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { VendorCreateNestedOneWithoutUserInputObjectSchema as VendorCreateNestedOneWithoutUserInputObjectSchema } from './VendorCreateNestedOneWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  phone: z.string(),
  address: z.string(),
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vendor: z.lazy(() => VendorCreateNestedOneWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutVendorcustomersInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutVendorcustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutVendorcustomersInput>;
export const UserCreateWithoutVendorcustomersInputObjectZodSchema = makeSchema();
