import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { VendorUncheckedCreateNestedOneWithoutUserInputObjectSchema as VendorUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './VendorUncheckedCreateNestedOneWithoutUserInput.schema';
import { VendorCustomersUncheckedCreateNestedManyWithoutUserInputObjectSchema as VendorCustomersUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './VendorCustomersUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  phone: z.string(),
  address: z.string(),
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  vendor: z.lazy(() => VendorUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  vendorcustomers: z.lazy(() => VendorCustomersUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
