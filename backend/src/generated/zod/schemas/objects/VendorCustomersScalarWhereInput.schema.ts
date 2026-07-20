import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const vendorcustomersscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => VendorCustomersScalarWhereInputObjectSchema), z.lazy(() => VendorCustomersScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VendorCustomersScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VendorCustomersScalarWhereInputObjectSchema), z.lazy(() => VendorCustomersScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  vendorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  customerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  customerPhone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const VendorCustomersScalarWhereInputObjectSchema: z.ZodType<Prisma.VendorCustomersScalarWhereInput> = vendorcustomersscalarwhereinputSchema as unknown as z.ZodType<Prisma.VendorCustomersScalarWhereInput>;
export const VendorCustomersScalarWhereInputObjectZodSchema = vendorcustomersscalarwhereinputSchema;
