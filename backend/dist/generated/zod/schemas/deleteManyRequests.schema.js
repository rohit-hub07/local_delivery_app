import * as z from 'zod';
import { RequestsWhereInputObjectSchema as RequestsWhereInputObjectSchema } from './objects/RequestsWhereInput.schema';
export const RequestsDeleteManySchema = z.object({ where: RequestsWhereInputObjectSchema.optional() }).strict();
export const RequestsDeleteManyZodSchema = z.object({ where: RequestsWhereInputObjectSchema.optional() }).strict();
