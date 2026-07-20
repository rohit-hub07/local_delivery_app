import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerSubscriptionCreateManyVendorCustomersInputSchema } from './CustomerSubscriptionCreateManyVendorCustomersInputSchema';

export const CustomerSubscriptionCreateManyVendorCustomersInputEnvelopeSchema: z.ZodType<Prisma.CustomerSubscriptionCreateManyVendorCustomersInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => CustomerSubscriptionCreateManyVendorCustomersInputSchema), z.lazy(() => CustomerSubscriptionCreateManyVendorCustomersInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default CustomerSubscriptionCreateManyVendorCustomersInputEnvelopeSchema;
