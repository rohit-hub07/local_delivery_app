import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutVendorcustomersInputObjectSchema as UserCreateNestedOneWithoutVendorcustomersInputObjectSchema } from './UserCreateNestedOneWithoutVendorcustomersInput.schema';
import { CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInput.schema';
import { RequestsCreateNestedManyWithoutVendorCustomersInputObjectSchema as RequestsCreateNestedManyWithoutVendorCustomersInputObjectSchema } from './RequestsCreateNestedManyWithoutVendorCustomersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  customerPhone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutVendorcustomersInputObjectSchema),
  subscription: z.lazy(() => CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInputObjectSchema).optional(),
  request: z.lazy(() => RequestsCreateNestedManyWithoutVendorCustomersInputObjectSchema).optional()
}).strict();
export const VendorCustomersCreateWithoutVendorInputObjectSchema: z.ZodType<Prisma.VendorCustomersCreateWithoutVendorInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersCreateWithoutVendorInput>;
export const VendorCustomersCreateWithoutVendorInputObjectZodSchema = makeSchema();
