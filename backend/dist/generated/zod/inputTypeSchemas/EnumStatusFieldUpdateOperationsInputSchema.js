import { z } from 'zod';
import { StatusSchema } from './StatusSchema';
export const EnumStatusFieldUpdateOperationsInputSchema = z.strictObject({
    set: z.lazy(() => StatusSchema).optional(),
});
export default EnumStatusFieldUpdateOperationsInputSchema;
