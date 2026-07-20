import * as z from 'zod';
import { RequestsUpdateManyMutationInputObjectSchema as RequestsUpdateManyMutationInputObjectSchema } from './objects/RequestsUpdateManyMutationInput.schema';
import { RequestsWhereInputObjectSchema as RequestsWhereInputObjectSchema } from './objects/RequestsWhereInput.schema';
export const RequestsUpdateManySchema = z.object({ data: RequestsUpdateManyMutationInputObjectSchema, where: RequestsWhereInputObjectSchema.optional() }).strict();
export const RequestsUpdateManyZodSchema = z.object({ data: RequestsUpdateManyMutationInputObjectSchema, where: RequestsWhereInputObjectSchema.optional() }).strict();
