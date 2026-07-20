import * as z from 'zod';
import { RequestsSelectObjectSchema as RequestsSelectObjectSchema } from './objects/RequestsSelect.schema';
import { RequestsIncludeObjectSchema as RequestsIncludeObjectSchema } from './objects/RequestsInclude.schema';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './objects/RequestsWhereUniqueInput.schema';
export const RequestsFindUniqueOrThrowSchema = z.object({ select: RequestsSelectObjectSchema.optional(), include: RequestsIncludeObjectSchema.optional(), where: RequestsWhereUniqueInputObjectSchema }).strict();
export const RequestsFindUniqueOrThrowZodSchema = z.object({ select: RequestsSelectObjectSchema.optional(), include: RequestsIncludeObjectSchema.optional(), where: RequestsWhereUniqueInputObjectSchema }).strict();
