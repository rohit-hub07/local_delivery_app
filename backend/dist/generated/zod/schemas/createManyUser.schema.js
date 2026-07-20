import * as z from 'zod';
import { UserCreateManyInputObjectSchema as UserCreateManyInputObjectSchema } from './objects/UserCreateManyInput.schema';
export const UserCreateManySchema = z.object({ data: z.union([UserCreateManyInputObjectSchema, z.array(UserCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const UserCreateManyZodSchema = z.object({ data: z.union([UserCreateManyInputObjectSchema, z.array(UserCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
