import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { RequestsWhereInputSchema } from '../inputTypeSchemas/RequestsWhereInputSchema'
import { RequestsOrderByWithRelationInputSchema } from '../inputTypeSchemas/RequestsOrderByWithRelationInputSchema'
import { RequestsWhereUniqueInputSchema } from '../inputTypeSchemas/RequestsWhereUniqueInputSchema'

export const RequestsAggregateArgsSchema: z.ZodType<Prisma.RequestsAggregateArgs> = z.object({
  where: RequestsWhereInputSchema.optional(), 
  orderBy: z.union([ RequestsOrderByWithRelationInputSchema.array(), RequestsOrderByWithRelationInputSchema ]).optional(),
  cursor: RequestsWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default RequestsAggregateArgsSchema;
