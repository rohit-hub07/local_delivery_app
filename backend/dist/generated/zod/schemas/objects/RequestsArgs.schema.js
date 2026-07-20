import * as z from 'zod';
import { RequestsSelectObjectSchema as RequestsSelectObjectSchema } from './RequestsSelect.schema';
import { RequestsIncludeObjectSchema as RequestsIncludeObjectSchema } from './RequestsInclude.schema';
const makeSchema = () => z.object({
    select: z.lazy(() => RequestsSelectObjectSchema).optional(),
    include: z.lazy(() => RequestsIncludeObjectSchema).optional()
}).strict();
export const RequestsArgsObjectSchema = makeSchema();
export const RequestsArgsObjectZodSchema = makeSchema();
