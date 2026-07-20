import { z } from 'zod';
import { UserUpdateManyMutationInputSchema } from '../inputTypeSchemas/UserUpdateManyMutationInputSchema';
import { UserUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/UserUncheckedUpdateManyInputSchema';
import { UserWhereInputSchema } from '../inputTypeSchemas/UserWhereInputSchema';
export const UserUpdateManyArgsSchema = z.object({
    data: z.union([UserUpdateManyMutationInputSchema, UserUncheckedUpdateManyInputSchema]),
    where: UserWhereInputSchema.optional(),
    limit: z.number().optional(),
}).strict();
export default UserUpdateManyArgsSchema;
