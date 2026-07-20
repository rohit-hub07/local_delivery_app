import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RequestsCreateManyInputObjectSchema as RequestsCreateManyInputObjectSchema } from './objects/RequestsCreateManyInput.schema';

export const RequestsCreateManySchema: z.ZodType<Prisma.RequestsCreateManyArgs> = z.object({ data: z.union([ RequestsCreateManyInputObjectSchema, z.array(RequestsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RequestsCreateManyArgs>;

export const RequestsCreateManyZodSchema = z.object({ data: z.union([ RequestsCreateManyInputObjectSchema, z.array(RequestsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();