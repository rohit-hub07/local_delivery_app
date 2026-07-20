import * as z from 'zod';
import { StatusSchema } from '../enums/Status.schema';
const makeSchema = () => z.object({
    set: StatusSchema.optional()
}).strict();
export const EnumStatusFieldUpdateOperationsInputObjectSchema = makeSchema();
export const EnumStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
