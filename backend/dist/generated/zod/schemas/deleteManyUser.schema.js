import * as z from 'zod';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './objects/UserWhereInput.schema';
export const UserDeleteManySchema = z.object({ where: UserWhereInputObjectSchema.optional() }).strict();
export const UserDeleteManyZodSchema = z.object({ where: UserWhereInputObjectSchema.optional() }).strict();
