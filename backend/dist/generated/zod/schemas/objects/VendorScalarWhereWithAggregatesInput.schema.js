import * as z from 'zod';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
const vendorscalarwherewithaggregatesinputSchema = z.object({
    AND: z.union([z.lazy(() => VendorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VendorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => VendorScalarWhereWithAggregatesInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => VendorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VendorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    businessName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    businessPhone: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const VendorScalarWhereWithAggregatesInputObjectSchema = vendorscalarwherewithaggregatesinputSchema;
export const VendorScalarWhereWithAggregatesInputObjectZodSchema = vendorscalarwherewithaggregatesinputSchema;
