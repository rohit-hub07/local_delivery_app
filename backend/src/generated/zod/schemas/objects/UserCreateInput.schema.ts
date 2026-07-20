import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { VendorCreateNestedOneWithoutUserInputObjectSchema as VendorCreateNestedOneWithoutUserInputObjectSchema } from './VendorCreateNestedOneWithoutUserInput.schema';
import { VendorCustomersCreateNestedManyWithoutUserInputObjectSchema as VendorCustomersCreateNestedManyWithoutUserInputObjectSchema } from './VendorCustomersCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  phone: z.string(),
  address: z.string(),
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  vendor: z.lazy(() => VendorCreateNestedOneWithoutUserInputObjectSchema).optional(),
  vendorcustomers: z.lazy(() => VendorCustomersCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
