import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RequestsOrderByWithRelationInputObjectSchema as RequestsOrderByWithRelationInputObjectSchema } from './objects/RequestsOrderByWithRelationInput.schema';
import { RequestsWhereInputObjectSchema as RequestsWhereInputObjectSchema } from './objects/RequestsWhereInput.schema';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './objects/RequestsWhereUniqueInput.schema';
import { RequestsCountAggregateInputObjectSchema as RequestsCountAggregateInputObjectSchema } from './objects/RequestsCountAggregateInput.schema';

export const RequestsCountSchema: z.ZodType<Prisma.RequestsCountArgs> = z.object({ orderBy: z.union([RequestsOrderByWithRelationInputObjectSchema, RequestsOrderByWithRelationInputObjectSchema.array()]).optional(), where: RequestsWhereInputObjectSchema.optional(), cursor: RequestsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RequestsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RequestsCountArgs>;

export const RequestsCountZodSchema = z.object({ orderBy: z.union([RequestsOrderByWithRelationInputObjectSchema, RequestsOrderByWithRelationInputObjectSchema.array()]).optional(), where: RequestsWhereInputObjectSchema.optional(), cursor: RequestsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RequestsCountAggregateInputObjectSchema ]).optional() }).strict();