import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StatusSchema } from '../enums/Status.schema';
import { ProductCreateNestedOneWithoutRequestInputObjectSchema as ProductCreateNestedOneWithoutRequestInputObjectSchema } from './ProductCreateNestedOneWithoutRequestInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  type: z.string().optional(),
  message: z.string(),
  start_date: z.coerce.date(),
  end_date: z.coerce.date(),
  status: StatusSchema.optional(),
  respondedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutRequestInputObjectSchema)
}).strict();
export const RequestsCreateWithoutVendorCustomersInputObjectSchema: z.ZodType<Prisma.RequestsCreateWithoutVendorCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsCreateWithoutVendorCustomersInput>;
export const RequestsCreateWithoutVendorCustomersInputObjectZodSchema = makeSchema();
