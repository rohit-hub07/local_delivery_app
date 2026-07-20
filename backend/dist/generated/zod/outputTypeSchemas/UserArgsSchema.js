import { z } from 'zod';
import { UserSelectSchema } from '../inputTypeSchemas/UserSelectSchema';
import { UserIncludeSchema } from '../inputTypeSchemas/UserIncludeSchema';
export const UserArgsSchema = z.object({
    select: z.lazy(() => UserSelectSchema).optional(),
    include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();
export default UserArgsSchema;
