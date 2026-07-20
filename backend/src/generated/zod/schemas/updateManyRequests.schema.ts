import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RequestsUpdateManyMutationInputObjectSchema as RequestsUpdateManyMutationInputObjectSchema } from './objects/RequestsUpdateManyMutationInput.schema';
import { RequestsWhereInputObjectSchema as RequestsWhereInputObjectSchema } from './objects/RequestsWhereInput.schema';

export const RequestsUpdateManySchema: z.ZodType<Prisma.RequestsUpdateManyArgs> = z.object({ data: RequestsUpdateManyMutationInputObjectSchema, where: RequestsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RequestsUpdateManyArgs>;

export const RequestsUpdateManyZodSchema = z.object({ data: RequestsUpdateManyMutationInputObjectSchema, where: RequestsWhereInputObjectSchema.optional() }).strict();