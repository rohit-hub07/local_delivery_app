import * as z from 'zod';
const makeSchema = () => z.object({
    set: z.string().optional()
}).strict();
export const StringFieldUpdateOperationsInputObjectSchema = makeSchema();
export const StringFieldUpdateOperationsInputObjectZodSchema = makeSchema();
