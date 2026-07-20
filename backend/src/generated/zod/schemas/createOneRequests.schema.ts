import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RequestsSelectObjectSchema as RequestsSelectObjectSchema } from './objects/RequestsSelect.schema';
import { RequestsIncludeObjectSchema as RequestsIncludeObjectSchema } from './objects/RequestsInclude.schema';
import { RequestsCreateInputObjectSchema as RequestsCreateInputObjectSchema } from './objects/RequestsCreateInput.schema';
import { RequestsUncheckedCreateInputObjectSchema as RequestsUncheckedCreateInputObjectSchema } from './objects/RequestsUncheckedCreateInput.schema';

export const RequestsCreateOneSchema: z.ZodType<Prisma.RequestsCreateArgs> = z.object({ select: RequestsSelectObjectSchema.optional(), include: RequestsIncludeObjectSchema.optional(), data: z.union([RequestsCreateInputObjectSchema, RequestsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RequestsCreateArgs>;

export const RequestsCreateOneZodSchema = z.object({ select: RequestsSelectObjectSchema.optional(), include: RequestsIncludeObjectSchema.optional(), data: z.union([RequestsCreateInputObjectSchema, RequestsUncheckedCreateInputObjectSchema]) }).strict();