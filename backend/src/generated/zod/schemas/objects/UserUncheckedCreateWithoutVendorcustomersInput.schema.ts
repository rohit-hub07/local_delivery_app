import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { VendorUncheckedCreateNestedOneWithoutUserInputObjectSchema as VendorUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './VendorUncheckedCreateNestedOneWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  phone: z.string(),
  address: z.string(),
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vendor: z.lazy(() => VendorUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutVendorcustomersInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutVendorcustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutVendorcustomersInput>;
export const UserUncheckedCreateWithoutVendorcustomersInputObjectZodSchema = makeSchema();
