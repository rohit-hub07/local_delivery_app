import * as z from 'zod';
const nesteddatetimefilterSchema = z.object({
    equals: z.date().optional(),
    in: z.union([z.date().array(), z.string().datetime().array()]).optional(),
    notIn: z.union([z.date().array(), z.string().datetime().array()]).optional(),
    lt: z.date().optional(),
    lte: z.date().optional(),
    gt: z.date().optional(),
    gte: z.date().optional(),
    not: z.union([z.date(), z.lazy(() => NestedDateTimeFilterObjectSchema)]).optional()
}).strict();
export const NestedDateTimeFilterObjectSchema = nesteddatetimefilterSchema;
export const NestedDateTimeFilterObjectZodSchema = nesteddatetimefilterSchema;
