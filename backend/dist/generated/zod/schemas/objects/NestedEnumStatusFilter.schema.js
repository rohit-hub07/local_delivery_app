import * as z from 'zod';
import { StatusSchema } from '../enums/Status.schema';
const nestedenumstatusfilterSchema = z.object({
    equals: StatusSchema.optional(),
    in: StatusSchema.array().optional(),
    notIn: StatusSchema.array().optional(),
    not: z.union([StatusSchema, z.lazy(() => NestedEnumStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumStatusFilterObjectSchema = nestedenumstatusfilterSchema;
export const NestedEnumStatusFilterObjectZodSchema = nestedenumstatusfilterSchema;
