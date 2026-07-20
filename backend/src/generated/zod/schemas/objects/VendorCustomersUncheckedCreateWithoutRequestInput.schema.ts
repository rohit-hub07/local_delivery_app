import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  vendorId: z.string(),
  customerId: z.string(),
  customerPhone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  subscription: z.lazy(() => CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema).optional()
}).strict();
export const VendorCustomersUncheckedCreateWithoutRequestInputObjectSchema: z.ZodType<Prisma.VendorCustomersUncheckedCreateWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersUncheckedCreateWithoutRequestInput>;
export const VendorCustomersUncheckedCreateWithoutRequestInputObjectZodSchema = makeSchema();
