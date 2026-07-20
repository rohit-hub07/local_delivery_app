import * as z from 'zod';
const nesteddatetimenullablefilterSchema = z.object({
    equals: z.date().optional().nullable(),
    in: z.union([z.date().array(), z.string().datetime().array()]).optional().nullable(),
    notIn: z.union([z.date().array(), z.string().datetime().array()]).optional().nullable(),
    lt: z.date().optional(),
    lte: z.date().optional(),
    gt: z.date().optional(),
    gte: z.date().optional(),
    not: z.union([z.date(), z.lazy(() => NestedDateTimeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedDateTimeNullableFilterObjectSchema = nesteddatetimenullablefilterSchema;
export const NestedDateTimeNullableFilterObjectZodSchema = nesteddatetimenullablefilterSchema;
