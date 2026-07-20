import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProductCreateNestedManyWithoutVendorInputObjectSchema as ProductCreateNestedManyWithoutVendorInputObjectSchema } from './ProductCreateNestedManyWithoutVendorInput.schema';
import { VendorCustomersCreateNestedManyWithoutVendorInputObjectSchema as VendorCustomersCreateNestedManyWithoutVendorInputObjectSchema } from './VendorCustomersCreateNestedManyWithoutVendorInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  businessName: z.string(),
  businessPhone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductCreateNestedManyWithoutVendorInputObjectSchema).optional(),
  vendorcustomers: z.lazy(() => VendorCustomersCreateNestedManyWithoutVendorInputObjectSchema).optional()
}).strict();
export const VendorCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.VendorCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCreateWithoutUserInput>;
export const VendorCreateWithoutUserInputObjectZodSchema = makeSchema();
