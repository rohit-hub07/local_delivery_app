import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { VendorCustomersUncheckedCreateNestedManyWithoutUserInputObjectSchema as VendorCustomersUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './VendorCustomersUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  phone: z.string(),
  address: z.string(),
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vendorcustomers: z.lazy(() => VendorCustomersUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutVendorInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutVendorInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutVendorInput>;
export const UserUncheckedCreateWithoutVendorInputObjectZodSchema = makeSchema();
