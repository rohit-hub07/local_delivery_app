import * as z from 'zod';
import { RequestsCreateManyInputObjectSchema as RequestsCreateManyInputObjectSchema } from './objects/RequestsCreateManyInput.schema';
export const RequestsCreateManySchema = z.object({ data: z.union([RequestsCreateManyInputObjectSchema, z.array(RequestsCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const RequestsCreateManyZodSchema = z.object({ data: z.union([RequestsCreateManyInputObjectSchema, z.array(RequestsCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
