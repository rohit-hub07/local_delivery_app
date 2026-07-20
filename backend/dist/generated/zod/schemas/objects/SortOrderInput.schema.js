import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { NullsOrderSchema } from '../enums/NullsOrder.schema';
const makeSchema = () => z.object({
    sort: SortOrderSchema,
    nulls: NullsOrderSchema.optional()
}).strict();
export const SortOrderInputObjectSchema = makeSchema();
export const SortOrderInputObjectZodSchema = makeSchema();
