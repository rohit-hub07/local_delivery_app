import * as z from 'zod';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumStatusFilterObjectSchema as EnumStatusFilterObjectSchema } from './EnumStatusFilter.schema';
import { StatusSchema } from '../enums/Status.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
const requestsscalarwhereinputSchema = z.object({
    AND: z.union([z.lazy(() => RequestsScalarWhereInputObjectSchema), z.lazy(() => RequestsScalarWhereInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => RequestsScalarWhereInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => RequestsScalarWhereInputObjectSchema), z.lazy(() => RequestsScalarWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    vendorCustomerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    productId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    message: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    start_date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    end_date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    status: z.union([z.lazy(() => EnumStatusFilterObjectSchema), StatusSchema]).optional(),
    respondedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const RequestsScalarWhereInputObjectSchema = requestsscalarwhereinputSchema;
export const RequestsScalarWhereInputObjectZodSchema = requestsscalarwhereinputSchema;
