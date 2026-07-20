import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCreateNestedOneWithoutVendorcustomersInputObjectSchema as VendorCreateNestedOneWithoutVendorcustomersInputObjectSchema } from './VendorCreateNestedOneWithoutVendorcustomersInput.schema';
import { UserCreateNestedOneWithoutVendorcustomersInputObjectSchema as UserCreateNestedOneWithoutVendorcustomersInputObjectSchema } from './UserCreateNestedOneWithoutVendorcustomersInput.schema';
import { CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInput.schema';
import { RequestsCreateNestedManyWithoutVendorCustomersInputObjectSchema as RequestsCreateNestedManyWithoutVendorCustomersInputObjectSchema } from './RequestsCreateNestedManyWithoutVendorCustomersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  customerPhone: z.string(),
  createdAt: z.coerce.date().optional(),
  vendor: z.lazy(() => VendorCreateNestedOneWithoutVendorcustomersInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutVendorcustomersInputObjectSchema),
  subscription: z.lazy(() => CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInputObjectSchema).optional(),
  request: z.lazy(() => RequestsCreateNestedManyWithoutVendorCustomersInputObjectSchema).optional()
}).strict();
export const VendorCustomersCreateInputObjectSchema: z.ZodType<Prisma.VendorCustomersCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersCreateInput>;
export const VendorCustomersCreateInputObjectZodSchema = makeSchema();
