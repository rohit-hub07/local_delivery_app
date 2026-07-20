import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { RequestsUpdateManyMutationInputSchema } from '../inputTypeSchemas/RequestsUpdateManyMutationInputSchema'
import { RequestsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RequestsUncheckedUpdateManyInputSchema'
import { RequestsWhereInputSchema } from '../inputTypeSchemas/RequestsWhereInputSchema'

export const RequestsUpdateManyArgsSchema: z.ZodType<Prisma.RequestsUpdateManyArgs> = z.object({
  data: z.union([ RequestsUpdateManyMutationInputSchema, RequestsUncheckedUpdateManyInputSchema ]),
  where: RequestsWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default RequestsUpdateManyArgsSchema;
