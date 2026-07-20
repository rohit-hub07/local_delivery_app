import * as z from 'zod';
import { RequestsCreateManyVendorCustomersInputObjectSchema as RequestsCreateManyVendorCustomersInputObjectSchema } from './RequestsCreateManyVendorCustomersInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => RequestsCreateManyVendorCustomersInputObjectSchema), z.lazy(() => RequestsCreateManyVendorCustomersInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const RequestsCreateManyVendorCustomersInputEnvelopeObjectSchema = makeSchema();
export const RequestsCreateManyVendorCustomersInputEnvelopeObjectZodSchema = makeSchema();
