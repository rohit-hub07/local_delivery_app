import { z } from 'zod';
import { RequestsSelectSchema } from '../inputTypeSchemas/RequestsSelectSchema';
import { RequestsIncludeSchema } from '../inputTypeSchemas/RequestsIncludeSchema';
export const RequestsArgsSchema = z.object({
    select: z.lazy(() => RequestsSelectSchema).optional(),
    include: z.lazy(() => RequestsIncludeSchema).optional(),
}).strict();
export default RequestsArgsSchema;
