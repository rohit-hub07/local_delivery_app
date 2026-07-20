import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInputObjectSchema as CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInput.schema';
import { RequestsUncheckedCreateNestedManyWithoutProductInputObjectSchema as RequestsUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './RequestsUncheckedCreateNestedManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  productName: z.string(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  subscription: z.lazy(() => CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional(),
  request: z.lazy(() => RequestsUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductUncheckedCreateWithoutVendorInputObjectSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutVendorInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUncheckedCreateWithoutVendorInput>;
export const ProductUncheckedCreateWithoutVendorInputObjectZodSchema = makeSchema();
