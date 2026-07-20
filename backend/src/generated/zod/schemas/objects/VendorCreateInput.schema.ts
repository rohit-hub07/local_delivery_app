import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutVendorInputObjectSchema as UserCreateNestedOneWithoutVendorInputObjectSchema } from './UserCreateNestedOneWithoutVendorInput.schema';
import { ProductCreateNestedManyWithoutVendorInputObjectSchema as ProductCreateNestedManyWithoutVendorInputObjectSchema } from './ProductCreateNestedManyWithoutVendorInput.schema';
import { VendorCustomersCreateNestedManyWithoutVendorInputObjectSchema as VendorCustomersCreateNestedManyWithoutVendorInputObjectSchema } from './VendorCustomersCreateNestedManyWithoutVendorInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  businessName: z.string(),
  businessPhone: z.string(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutVendorInputObjectSchema),
  product: z.lazy(() => ProductCreateNestedManyWithoutVendorInputObjectSchema).optional(),
  vendorcustomers: z.lazy(() => VendorCustomersCreateNestedManyWithoutVendorInputObjectSchema).optional()
}).strict();
export const VendorCreateInputObjectSchema: z.ZodType<Prisma.VendorCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCreateInput>;
export const VendorCreateInputObjectZodSchema = makeSchema();
