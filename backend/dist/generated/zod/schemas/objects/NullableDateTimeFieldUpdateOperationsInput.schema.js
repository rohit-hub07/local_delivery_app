import * as z from 'zod';
const makeSchema = () => z.object({
    set: z.coerce.date().optional()
}).strict();
export const NullableDateTimeFieldUpdateOperationsInputObjectSchema = makeSchema();
export const NullableDateTimeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
