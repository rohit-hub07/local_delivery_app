import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
export const UserScalarRelationFilterSchema = z.strictObject({
    is: z.lazy(() => UserWhereInputSchema).optional(),
    isNot: z.lazy(() => UserWhereInputSchema).optional(),
});
export default UserScalarRelationFilterSchema;
