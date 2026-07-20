import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
export const EnumRoleFieldUpdateOperationsInputSchema = z.strictObject({
    set: z.lazy(() => RoleSchema).optional(),
});
export default EnumRoleFieldUpdateOperationsInputSchema;
