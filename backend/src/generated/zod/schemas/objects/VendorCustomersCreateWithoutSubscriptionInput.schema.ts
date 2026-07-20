import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCreateNestedOneWithoutVendorcustomersInputObjectSchema as VendorCreateNestedOneWithoutVendorcustomersInputObjectSchema } from './VendorCreateNestedOneWithoutVendorcustomersInput.schema';
import { UserCreateNestedOneWithoutVendorcustomersInputObjectSchema as UserCreateNestedOneWithoutVendorcustomersInputObjectSchema } from './UserCreateNestedOneWithoutVendorcustomersInput.schema';
import { RequestsCreateNestedManyWithoutVendorCustomersInputObjectSchema as RequestsCreateNestedManyWithoutVendorCustomersInputObjectSchema } from './RequestsCreateNestedManyWithoutVendorCustomersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  customerPhone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vendor: z.lazy(() => VendorCreateNestedOneWithoutVendorcustomersInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutVendorcustomersInputObjectSchema),
  request: z.lazy(() => RequestsCreateNestedManyWithoutVendorCustomersInputObjectSchema).optional()
}).strict();
export const VendorCustomersCreateWithoutSubscriptionInputObjectSchema: z.ZodType<Prisma.VendorCustomersCreateWithoutSubscriptionInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersCreateWithoutSubscriptionInput>;
export const VendorCustomersCreateWithoutSubscriptionInputObjectZodSchema = makeSchema();
