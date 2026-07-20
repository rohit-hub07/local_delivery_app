import * as z from 'zod';
import { StatusSchema } from '../enums/Status.schema';
import { NestedEnumStatusFilterObjectSchema as NestedEnumStatusFilterObjectSchema } from './NestedEnumStatusFilter.schema';
const makeSchema = () => z.object({
    equals: StatusSchema.optional(),
    in: StatusSchema.array().optional(),
    notIn: StatusSchema.array().optional(),
    not: z.union([StatusSchema, z.lazy(() => NestedEnumStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumStatusFilterObjectSchema = makeSchema();
export const EnumStatusFilterObjectZodSchema = makeSchema();
