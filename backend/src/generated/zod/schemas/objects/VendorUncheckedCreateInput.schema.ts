import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProductUncheckedCreateNestedManyWithoutVendorInputObjectSchema as ProductUncheckedCreateNestedManyWithoutVendorInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutVendorInput.schema';
import { VendorCustomersUncheckedCreateNestedManyWithoutVendorInputObjectSchema as VendorCustomersUncheckedCreateNestedManyWithoutVendorInputObjectSchema } from './VendorCustomersUncheckedCreateNestedManyWithoutVendorInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  businessName: z.string(),
  businessPhone: z.string(),
  createdAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductUncheckedCreateNestedManyWithoutVendorInputObjectSchema).optional(),
  vendorcustomers: z.lazy(() => VendorCustomersUncheckedCreateNestedManyWithoutVendorInputObjectSchema).optional()
}).strict();
export const VendorUncheckedCreateInputObjectSchema: z.ZodType<Prisma.VendorUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorUncheckedCreateInput>;
export const VendorUncheckedCreateInputObjectZodSchema = makeSchema();
