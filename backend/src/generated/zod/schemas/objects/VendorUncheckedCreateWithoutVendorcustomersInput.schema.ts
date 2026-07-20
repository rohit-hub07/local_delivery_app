import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProductUncheckedCreateNestedManyWithoutVendorInputObjectSchema as ProductUncheckedCreateNestedManyWithoutVendorInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutVendorInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  businessName: z.string(),
  businessPhone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductUncheckedCreateNestedManyWithoutVendorInputObjectSchema).optional()
}).strict();
export const VendorUncheckedCreateWithoutVendorcustomersInputObjectSchema: z.ZodType<Prisma.VendorUncheckedCreateWithoutVendorcustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorUncheckedCreateWithoutVendorcustomersInput>;
export const VendorUncheckedCreateWithoutVendorcustomersInputObjectZodSchema = makeSchema();
