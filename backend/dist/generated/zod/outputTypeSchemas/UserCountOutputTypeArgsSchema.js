import { z } from 'zod';
import { UserCountOutputTypeSelectSchema } from './UserCountOutputTypeSelectSchema';
export const UserCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();
export default UserCountOutputTypeSelectSchema;
