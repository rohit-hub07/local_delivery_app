import * as z from 'zod';
import { RequestsSelectObjectSchema as RequestsSelectObjectSchema } from './objects/RequestsSelect.schema';
import { RequestsCreateManyInputObjectSchema as RequestsCreateManyInputObjectSchema } from './objects/RequestsCreateManyInput.schema';
export const RequestsCreateManyAndReturnSchema = z.object({ select: RequestsSelectObjectSchema.optional(), data: z.union([RequestsCreateManyInputObjectSchema, z.array(RequestsCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const RequestsCreateManyAndReturnZodSchema = z.object({ select: RequestsSelectObjectSchema.optional(), data: z.union([RequestsCreateManyInputObjectSchema, z.array(RequestsCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
