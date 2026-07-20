import { z } from 'zod';
import { RequestsUpdateManyMutationInputSchema } from '../inputTypeSchemas/RequestsUpdateManyMutationInputSchema';
import { RequestsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RequestsUncheckedUpdateManyInputSchema';
import { RequestsWhereInputSchema } from '../inputTypeSchemas/RequestsWhereInputSchema';
export const RequestsUpdateManyArgsSchema = z.object({
    data: z.union([RequestsUpdateManyMutationInputSchema, RequestsUncheckedUpdateManyInputSchema]),
    where: RequestsWhereInputSchema.optional(),
    limit: z.number().optional(),
}).strict();
export default RequestsUpdateManyArgsSchema;
