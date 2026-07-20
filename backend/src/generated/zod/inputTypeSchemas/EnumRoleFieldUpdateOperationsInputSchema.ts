import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';

export const EnumRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRoleFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => RoleSchema).optional(),
});

export default EnumRoleFieldUpdateOperationsInputSchema;
