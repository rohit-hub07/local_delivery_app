import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInput.schema';
import { RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema as RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema } from './RequestsUncheckedCreateNestedManyWithoutVendorCustomersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  vendorId: z.string(),
  customerPhone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  subscription: z.lazy(() => CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema).optional(),
  request: z.lazy(() => RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema).optional()
}).strict();
export const VendorCustomersUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.VendorCustomersUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersUncheckedCreateWithoutUserInput>;
export const VendorCustomersUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
