import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { RequestsUpdateManyMutationInputSchema } from '../inputTypeSchemas/RequestsUpdateManyMutationInputSchema'
import { RequestsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RequestsUncheckedUpdateManyInputSchema'
import { RequestsWhereInputSchema } from '../inputTypeSchemas/RequestsWhereInputSchema'

export const RequestsUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.RequestsUpdateManyAndReturnArgs> = z.object({
  data: z.union([ RequestsUpdateManyMutationInputSchema, RequestsUncheckedUpdateManyInputSchema ]),
  where: RequestsWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default RequestsUpdateManyAndReturnArgsSchema;
