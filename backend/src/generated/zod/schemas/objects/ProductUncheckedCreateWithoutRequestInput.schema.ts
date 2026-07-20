import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInputObjectSchema as CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  vendorId: z.string(),
  productName: z.string(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  subscription: z.lazy(() => CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductUncheckedCreateWithoutRequestInputObjectSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUncheckedCreateWithoutRequestInput>;
export const ProductUncheckedCreateWithoutRequestInputObjectZodSchema = makeSchema();
