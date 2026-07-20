import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const customersubscriptionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomerSubscriptionScalarWhereInputObjectSchema), z.lazy(() => CustomerSubscriptionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomerSubscriptionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomerSubscriptionScalarWhereInputObjectSchema), z.lazy(() => CustomerSubscriptionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  vendorCustomerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  productId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CustomerSubscriptionScalarWhereInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionScalarWhereInput> = customersubscriptionscalarwhereinputSchema as unknown as z.ZodType<Prisma.CustomerSubscriptionScalarWhereInput>;
export const CustomerSubscriptionScalarWhereInputObjectZodSchema = customersubscriptionscalarwhereinputSchema;
