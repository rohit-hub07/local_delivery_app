import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { RequestsCreateManyInputSchema } from '../inputTypeSchemas/RequestsCreateManyInputSchema'

export const RequestsCreateManyArgsSchema: z.ZodType<Prisma.RequestsCreateManyArgs> = z.object({
  data: z.union([ RequestsCreateManyInputSchema, RequestsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default RequestsCreateManyArgsSchema;
