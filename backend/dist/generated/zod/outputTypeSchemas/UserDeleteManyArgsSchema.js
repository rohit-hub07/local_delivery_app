import { z } from 'zod';
import { UserWhereInputSchema } from '../inputTypeSchemas/UserWhereInputSchema';
export const UserDeleteManyArgsSchema = z.object({
    where: UserWhereInputSchema.optional(),
    limit: z.number().optional(),
}).strict();
export default UserDeleteManyArgsSchema;
