import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RequestsCreateManyVendorCustomersInputSchema } from './RequestsCreateManyVendorCustomersInputSchema';

export const RequestsCreateManyVendorCustomersInputEnvelopeSchema: z.ZodType<Prisma.RequestsCreateManyVendorCustomersInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => RequestsCreateManyVendorCustomersInputSchema), z.lazy(() => RequestsCreateManyVendorCustomersInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default RequestsCreateManyVendorCustomersInputEnvelopeSchema;
