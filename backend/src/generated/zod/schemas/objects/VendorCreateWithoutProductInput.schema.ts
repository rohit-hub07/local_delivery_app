import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutVendorInputObjectSchema as UserCreateNestedOneWithoutVendorInputObjectSchema } from './UserCreateNestedOneWithoutVendorInput.schema';
import { VendorCustomersCreateNestedManyWithoutVendorInputObjectSchema as VendorCustomersCreateNestedManyWithoutVendorInputObjectSchema } from './VendorCustomersCreateNestedManyWithoutVendorInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  businessName: z.string(),
  businessPhone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutVendorInputObjectSchema),
  vendorcustomers: z.lazy(() => VendorCustomersCreateNestedManyWithoutVendorInputObjectSchema).optional()
}).strict();
export const VendorCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.VendorCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCreateWithoutProductInput>;
export const VendorCreateWithoutProductInputObjectZodSchema = makeSchema();
