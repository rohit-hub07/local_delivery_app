import { z } from 'zod';
export const StringFieldUpdateOperationsInputSchema = z.strictObject({
    set: z.string().optional(),
});
export default StringFieldUpdateOperationsInputSchema;
