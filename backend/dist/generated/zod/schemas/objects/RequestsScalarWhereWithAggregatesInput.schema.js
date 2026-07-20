import * as z from 'zod';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumStatusWithAggregatesFilterObjectSchema as EnumStatusWithAggregatesFilterObjectSchema } from './EnumStatusWithAggregatesFilter.schema';
import { StatusSchema } from '../enums/Status.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
const requestsscalarwherewithaggregatesinputSchema = z.object({
    AND: z.union([z.lazy(() => RequestsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RequestsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => RequestsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => RequestsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RequestsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    vendorCustomerId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    productId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    message: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    start_date: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    end_date: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    status: z.union([z.lazy(() => EnumStatusWithAggregatesFilterObjectSchema), StatusSchema]).optional(),
    respondedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const RequestsScalarWhereWithAggregatesInputObjectSchema = requestsscalarwherewithaggregatesinputSchema;
export const RequestsScalarWhereWithAggregatesInputObjectZodSchema = requestsscalarwherewithaggregatesinputSchema;
