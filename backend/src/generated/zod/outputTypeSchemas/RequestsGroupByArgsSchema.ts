import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { RequestsWhereInputSchema } from '../inputTypeSchemas/RequestsWhereInputSchema'
import { RequestsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RequestsOrderByWithAggregationInputSchema'
import { RequestsScalarFieldEnumSchema } from '../inputTypeSchemas/RequestsScalarFieldEnumSchema'
import { RequestsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RequestsScalarWhereWithAggregatesInputSchema'

export const RequestsGroupByArgsSchema: z.ZodType<Prisma.RequestsGroupByArgs> = z.object({
  where: RequestsWhereInputSchema.optional(), 
  orderBy: z.union([ RequestsOrderByWithAggregationInputSchema.array(), RequestsOrderByWithAggregationInputSchema ]).optional(),
  by: RequestsScalarFieldEnumSchema.array(), 
  having: RequestsScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default RequestsGroupByArgsSchema;
