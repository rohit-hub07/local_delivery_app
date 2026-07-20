import * as z from 'zod';
import { VendorCustomersCreateManyVendorInputObjectSchema as VendorCustomersCreateManyVendorInputObjectSchema } from './VendorCustomersCreateManyVendorInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => VendorCustomersCreateManyVendorInputObjectSchema), z.lazy(() => VendorCustomersCreateManyVendorInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const VendorCustomersCreateManyVendorInputEnvelopeObjectSchema = makeSchema();
export const VendorCustomersCreateManyVendorInputEnvelopeObjectZodSchema = makeSchema();
