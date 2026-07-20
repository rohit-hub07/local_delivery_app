import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StatusSchema } from '../enums/Status.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  productId: z.string(),
  type: z.string().optional(),
  message: z.string(),
  start_date: z.coerce.date(),
  end_date: z.coerce.date(),
  status: StatusSchema.optional(),
  respondedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const RequestsCreateManyVendorCustomersInputObjectSchema: z.ZodType<Prisma.RequestsCreateManyVendorCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsCreateManyVendorCustomersInput>;
export const RequestsCreateManyVendorCustomersInputObjectZodSchema = makeSchema();
