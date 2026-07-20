import { z } from 'zod';
import { RequestsWhereInputSchema } from '../inputTypeSchemas/RequestsWhereInputSchema';
export const RequestsDeleteManyArgsSchema = z.object({
    where: RequestsWhereInputSchema.optional(),
    limit: z.number().optional(),
}).strict();
export default RequestsDeleteManyArgsSchema;
