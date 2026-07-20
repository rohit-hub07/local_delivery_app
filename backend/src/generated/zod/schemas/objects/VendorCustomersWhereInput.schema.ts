import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { VendorScalarRelationFilterObjectSchema as VendorScalarRelationFilterObjectSchema } from './VendorScalarRelationFilter.schema';
import { VendorWhereInputObjectSchema as VendorWhereInputObjectSchema } from './VendorWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { CustomerSubscriptionListRelationFilterObjectSchema as CustomerSubscriptionListRelationFilterObjectSchema } from './CustomerSubscriptionListRelationFilter.schema';
import { RequestsListRelationFilterObjectSchema as RequestsListRelationFilterObjectSchema } from './RequestsListRelationFilter.schema'

const vendorcustomerswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => VendorCustomersWhereInputObjectSchema), z.lazy(() => VendorCustomersWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VendorCustomersWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VendorCustomersWhereInputObjectSchema), z.lazy(() => VendorCustomersWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  vendorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  customerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  customerPhone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  vendor: z.union([z.lazy(() => VendorScalarRelationFilterObjectSchema), z.lazy(() => VendorWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  subscription: z.lazy(() => CustomerSubscriptionListRelationFilterObjectSchema).optional(),
  request: z.lazy(() => RequestsListRelationFilterObjectSchema).optional()
}).strict();
export const VendorCustomersWhereInputObjectSchema: z.ZodType<Prisma.VendorCustomersWhereInput> = vendorcustomerswhereinputSchema as unknown as z.ZodType<Prisma.VendorCustomersWhereInput>;
export const VendorCustomersWhereInputObjectZodSchema = vendorcustomerswhereinputSchema;
