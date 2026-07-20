import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RequestsSelectObjectSchema as RequestsSelectObjectSchema } from './objects/RequestsSelect.schema';
import { RequestsCreateManyInputObjectSchema as RequestsCreateManyInputObjectSchema } from './objects/RequestsCreateManyInput.schema';

export const RequestsCreateManyAndReturnSchema: z.ZodType<Prisma.RequestsCreateManyAndReturnArgs> = z.object({ select: RequestsSelectObjectSchema.optional(), data: z.union([ RequestsCreateManyInputObjectSchema, z.array(RequestsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RequestsCreateManyAndReturnArgs>;

export const RequestsCreateManyAndReturnZodSchema = z.object({ select: RequestsSelectObjectSchema.optional(), data: z.union([ RequestsCreateManyInputObjectSchema, z.array(RequestsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();