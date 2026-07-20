import { z } from 'zod';
import { UserCreateManyInputSchema } from '../inputTypeSchemas/UserCreateManyInputSchema';
export const UserCreateManyArgsSchema = z.object({
    data: z.union([UserCreateManyInputSchema, UserCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default UserCreateManyArgsSchema;
