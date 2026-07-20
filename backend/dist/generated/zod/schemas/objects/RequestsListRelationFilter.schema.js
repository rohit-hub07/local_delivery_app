import * as z from 'zod';
import { RequestsWhereInputObjectSchema as RequestsWhereInputObjectSchema } from './RequestsWhereInput.schema';
const makeSchema = () => z.object({
    every: z.lazy(() => RequestsWhereInputObjectSchema).optional(),
    some: z.lazy(() => RequestsWhereInputObjectSchema).optional(),
    none: z.lazy(() => RequestsWhereInputObjectSchema).optional()
}).strict();
export const RequestsListRelationFilterObjectSchema = makeSchema();
export const RequestsListRelationFilterObjectZodSchema = makeSchema();
