import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCustomersCreateManyUserInputSchema } from './VendorCustomersCreateManyUserInputSchema';

export const VendorCustomersCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.VendorCustomersCreateManyUserInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => VendorCustomersCreateManyUserInputSchema), z.lazy(() => VendorCustomersCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default VendorCustomersCreateManyUserInputEnvelopeSchema;
