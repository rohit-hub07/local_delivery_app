import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { RequestsWhereInputSchema } from '../inputTypeSchemas/RequestsWhereInputSchema'

export const RequestsDeleteManyArgsSchema: z.ZodType<Prisma.RequestsDeleteManyArgs> = z.object({
  where: RequestsWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default RequestsDeleteManyArgsSchema;
