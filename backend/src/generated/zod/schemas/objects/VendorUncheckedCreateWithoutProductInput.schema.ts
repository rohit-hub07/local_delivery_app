import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersUncheckedCreateNestedManyWithoutVendorInputObjectSchema as VendorCustomersUncheckedCreateNestedManyWithoutVendorInputObjectSchema } from './VendorCustomersUncheckedCreateNestedManyWithoutVendorInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  businessName: z.string(),
  businessPhone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vendorcustomers: z.lazy(() => VendorCustomersUncheckedCreateNestedManyWithoutVendorInputObjectSchema).optional()
}).strict();
export const VendorUncheckedCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.VendorUncheckedCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorUncheckedCreateWithoutProductInput>;
export const VendorUncheckedCreateWithoutProductInputObjectZodSchema = makeSchema();
