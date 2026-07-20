import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';

export const EnumStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumStatusFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => StatusSchema).optional(),
});

export default EnumStatusFieldUpdateOperationsInputSchema;
