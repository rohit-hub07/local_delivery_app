import * as z from 'zod';
import { VendorCustomersCreateManyUserInputObjectSchema as VendorCustomersCreateManyUserInputObjectSchema } from './VendorCustomersCreateManyUserInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => VendorCustomersCreateManyUserInputObjectSchema), z.lazy(() => VendorCustomersCreateManyUserInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const VendorCustomersCreateManyUserInputEnvelopeObjectSchema = makeSchema();
export const VendorCustomersCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
