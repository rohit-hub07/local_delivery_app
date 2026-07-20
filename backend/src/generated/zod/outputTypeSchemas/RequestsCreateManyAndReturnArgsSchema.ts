import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { RequestsCreateManyInputSchema } from '../inputTypeSchemas/RequestsCreateManyInputSchema'

export const RequestsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RequestsCreateManyAndReturnArgs> = z.object({
  data: z.union([ RequestsCreateManyInputSchema, RequestsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default RequestsCreateManyAndReturnArgsSchema;
