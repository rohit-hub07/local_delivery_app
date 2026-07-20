import { z } from 'zod';
export const UserCountOutputTypeSelectSchema = z.object({
    vendorcustomers: z.boolean().optional(),
}).strict();
export default UserCountOutputTypeSelectSchema;
