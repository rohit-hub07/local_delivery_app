import { z } from 'zod';
export const NullableDateTimeFieldUpdateOperationsInputSchema = z.strictObject({
    set: z.coerce.date().optional().nullable(),
});
export default NullableDateTimeFieldUpdateOperationsInputSchema;
