import * as z from 'zod';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
const vendorcustomersscalarwherewithaggregatesinputSchema = z.object({
    AND: z.union([z.lazy(() => VendorCustomersScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VendorCustomersScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => VendorCustomersScalarWhereWithAggregatesInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => VendorCustomersScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VendorCustomersScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    vendorId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    customerId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    customerPhone: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const VendorCustomersScalarWhereWithAggregatesInputObjectSchema = vendorcustomersscalarwherewithaggregatesinputSchema;
export const VendorCustomersScalarWhereWithAggregatesInputObjectZodSchema = vendorcustomersscalarwherewithaggregatesinputSchema;
