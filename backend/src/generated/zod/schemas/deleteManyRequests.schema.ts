import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RequestsWhereInputObjectSchema as RequestsWhereInputObjectSchema } from './objects/RequestsWhereInput.schema';

export const RequestsDeleteManySchema: z.ZodType<Prisma.RequestsDeleteManyArgs> = z.object({ where: RequestsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RequestsDeleteManyArgs>;

export const RequestsDeleteManyZodSchema = z.object({ where: RequestsWhereInputObjectSchema.optional() }).strict();