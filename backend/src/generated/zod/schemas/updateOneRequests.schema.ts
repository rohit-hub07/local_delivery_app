import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RequestsSelectObjectSchema as RequestsSelectObjectSchema } from './objects/RequestsSelect.schema';
import { RequestsIncludeObjectSchema as RequestsIncludeObjectSchema } from './objects/RequestsInclude.schema';
import { RequestsUpdateInputObjectSchema as RequestsUpdateInputObjectSchema } from './objects/RequestsUpdateInput.schema';
import { RequestsUncheckedUpdateInputObjectSchema as RequestsUncheckedUpdateInputObjectSchema } from './objects/RequestsUncheckedUpdateInput.schema';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './objects/RequestsWhereUniqueInput.schema';

export const RequestsUpdateOneSchema: z.ZodType<Prisma.RequestsUpdateArgs> = z.object({ select: RequestsSelectObjectSchema.optional(), include: RequestsIncludeObjectSchema.optional(), data: z.union([RequestsUpdateInputObjectSchema, RequestsUncheckedUpdateInputObjectSchema]), where: RequestsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RequestsUpdateArgs>;

export const RequestsUpdateOneZodSchema = z.object({ select: RequestsSelectObjectSchema.optional(), include: RequestsIncludeObjectSchema.optional(), data: z.union([RequestsUpdateInputObjectSchema, RequestsUncheckedUpdateInputObjectSchema]), where: RequestsWhereUniqueInputObjectSchema }).strict();