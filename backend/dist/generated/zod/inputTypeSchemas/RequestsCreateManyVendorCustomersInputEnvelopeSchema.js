import { z } from 'zod';
import { RequestsCreateManyVendorCustomersInputSchema } from './RequestsCreateManyVendorCustomersInputSchema';
export const RequestsCreateManyVendorCustomersInputEnvelopeSchema = z.strictObject({
    data: z.union([z.lazy(() => RequestsCreateManyVendorCustomersInputSchema), z.lazy(() => RequestsCreateManyVendorCustomersInputSchema).array()]),
    skipDuplicates: z.boolean().optional(),
});
export default RequestsCreateManyVendorCustomersInputEnvelopeSchema;
