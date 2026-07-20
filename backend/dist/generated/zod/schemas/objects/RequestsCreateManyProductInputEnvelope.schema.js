import * as z from 'zod';
import { RequestsCreateManyProductInputObjectSchema as RequestsCreateManyProductInputObjectSchema } from './RequestsCreateManyProductInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => RequestsCreateManyProductInputObjectSchema), z.lazy(() => RequestsCreateManyProductInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const RequestsCreateManyProductInputEnvelopeObjectSchema = makeSchema();
export const RequestsCreateManyProductInputEnvelopeObjectZodSchema = makeSchema();
