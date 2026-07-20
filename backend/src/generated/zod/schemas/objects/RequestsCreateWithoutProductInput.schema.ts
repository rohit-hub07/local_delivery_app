import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StatusSchema } from '../enums/Status.schema';
import { VendorCustomersCreateNestedOneWithoutRequestInputObjectSchema as VendorCustomersCreateNestedOneWithoutRequestInputObjectSchema } from './VendorCustomersCreateNestedOneWithoutRequestInput.schema'

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
  vendorCustomers: z.lazy(() => VendorCustomersCreateNestedOneWithoutRequestInputObjectSchema)
}).strict();
export const RequestsCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.RequestsCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsCreateWithoutProductInput>;
export const RequestsCreateWithoutProductInputObjectZodSchema = makeSchema();
