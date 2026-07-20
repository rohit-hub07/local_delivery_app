import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { VendorCustomersCreateNestedManyWithoutUserInputObjectSchema as VendorCustomersCreateNestedManyWithoutUserInputObjectSchema } from './VendorCustomersCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  phone: z.string(),
  address: z.string(),
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vendorcustomers: z.lazy(() => VendorCustomersCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutVendorInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutVendorInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutVendorInput>;
export const UserCreateWithoutVendorInputObjectZodSchema = makeSchema();
