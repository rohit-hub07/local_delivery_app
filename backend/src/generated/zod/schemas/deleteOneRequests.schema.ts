import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RequestsSelectObjectSchema as RequestsSelectObjectSchema } from './objects/RequestsSelect.schema';
import { RequestsIncludeObjectSchema as RequestsIncludeObjectSchema } from './objects/RequestsInclude.schema';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './objects/RequestsWhereUniqueInput.schema';

export const RequestsDeleteOneSchema: z.ZodType<Prisma.RequestsDeleteArgs> = z.object({ select: RequestsSelectObjectSchema.optional(), include: RequestsIncludeObjectSchema.optional(), where: RequestsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RequestsDeleteArgs>;

export const RequestsDeleteOneZodSchema = z.object({ select: RequestsSelectObjectSchema.optional(), include: RequestsIncludeObjectSchema.optional(), where: RequestsWhereUniqueInputObjectSchema }).strict();