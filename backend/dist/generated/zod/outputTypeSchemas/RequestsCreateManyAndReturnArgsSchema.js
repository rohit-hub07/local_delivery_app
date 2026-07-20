import { z } from 'zod';
import { RequestsCreateManyInputSchema } from '../inputTypeSchemas/RequestsCreateManyInputSchema';
export const RequestsCreateManyAndReturnArgsSchema = z.object({
    data: z.union([RequestsCreateManyInputSchema, RequestsCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default RequestsCreateManyAndReturnArgsSchema;
