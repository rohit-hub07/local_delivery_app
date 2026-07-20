import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const customersubscriptionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomerSubscriptionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CustomerSubscriptionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomerSubscriptionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomerSubscriptionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CustomerSubscriptionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  vendorCustomerId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  productId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CustomerSubscriptionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionScalarWhereWithAggregatesInput> = customersubscriptionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CustomerSubscriptionScalarWhereWithAggregatesInput>;
export const CustomerSubscriptionScalarWhereWithAggregatesInputObjectZodSchema = customersubscriptionscalarwherewithaggregatesinputSchema;
