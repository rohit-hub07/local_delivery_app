import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCustomersCreateManyVendorInputSchema } from './VendorCustomersCreateManyVendorInputSchema';

export const VendorCustomersCreateManyVendorInputEnvelopeSchema: z.ZodType<Prisma.VendorCustomersCreateManyVendorInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => VendorCustomersCreateManyVendorInputSchema), z.lazy(() => VendorCustomersCreateManyVendorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default VendorCustomersCreateManyVendorInputEnvelopeSchema;
