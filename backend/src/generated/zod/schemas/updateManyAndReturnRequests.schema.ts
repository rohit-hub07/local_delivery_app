import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RequestsSelectObjectSchema as RequestsSelectObjectSchema } from './objects/RequestsSelect.schema';
import { RequestsUpdateManyMutationInputObjectSchema as RequestsUpdateManyMutationInputObjectSchema } from './objects/RequestsUpdateManyMutationInput.schema';
import { RequestsWhereInputObjectSchema as RequestsWhereInputObjectSchema } from './objects/RequestsWhereInput.schema';

export const RequestsUpdateManyAndReturnSchema: z.ZodType<Prisma.RequestsUpdateManyAndReturnArgs> = z.object({ select: RequestsSelectObjectSchema.optional(), data: RequestsUpdateManyMutationInputObjectSchema, where: RequestsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RequestsUpdateManyAndReturnArgs>;

export const RequestsUpdateManyAndReturnZodSchema = z.object({ select: RequestsSelectObjectSchema.optional(), data: RequestsUpdateManyMutationInputObjectSchema, where: RequestsWhereInputObjectSchema.optional() }).strict();