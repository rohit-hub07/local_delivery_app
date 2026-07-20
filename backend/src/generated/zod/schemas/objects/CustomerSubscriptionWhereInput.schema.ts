import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { VendorCustomersScalarRelationFilterObjectSchema as VendorCustomersScalarRelationFilterObjectSchema } from './VendorCustomersScalarRelationFilter.schema';
import { VendorCustomersWhereInputObjectSchema as VendorCustomersWhereInputObjectSchema } from './VendorCustomersWhereInput.schema';
import { ProductScalarRelationFilterObjectSchema as ProductScalarRelationFilterObjectSchema } from './ProductScalarRelationFilter.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const customersubscriptionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomerSubscriptionWhereInputObjectSchema), z.lazy(() => CustomerSubscriptionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomerSubscriptionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomerSubscriptionWhereInputObjectSchema), z.lazy(() => CustomerSubscriptionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  vendorCustomerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  productId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  vendorCustomers: z.union([z.lazy(() => VendorCustomersScalarRelationFilterObjectSchema), z.lazy(() => VendorCustomersWhereInputObjectSchema)]).optional(),
  product: z.union([z.lazy(() => ProductScalarRelationFilterObjectSchema), z.lazy(() => ProductWhereInputObjectSchema)]).optional()
}).strict();
export const CustomerSubscriptionWhereInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionWhereInput> = customersubscriptionwhereinputSchema as unknown as z.ZodType<Prisma.CustomerSubscriptionWhereInput>;
export const CustomerSubscriptionWhereInputObjectZodSchema = customersubscriptionwhereinputSchema;
