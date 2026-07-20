import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutVendorInputObjectSchema as UserCreateNestedOneWithoutVendorInputObjectSchema } from './UserCreateNestedOneWithoutVendorInput.schema';
import { ProductCreateNestedManyWithoutVendorInputObjectSchema as ProductCreateNestedManyWithoutVendorInputObjectSchema } from './ProductCreateNestedManyWithoutVendorInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  businessName: z.string(),
  businessPhone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutVendorInputObjectSchema),
  product: z.lazy(() => ProductCreateNestedManyWithoutVendorInputObjectSchema).optional()
}).strict();
export const VendorCreateWithoutVendorcustomersInputObjectSchema: z.ZodType<Prisma.VendorCreateWithoutVendorcustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCreateWithoutVendorcustomersInput>;
export const VendorCreateWithoutVendorcustomersInputObjectZodSchema = makeSchema();
