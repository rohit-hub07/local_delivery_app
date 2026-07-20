import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerSubscriptionCreateManyProductInputSchema } from './CustomerSubscriptionCreateManyProductInputSchema';

export const CustomerSubscriptionCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.CustomerSubscriptionCreateManyProductInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => CustomerSubscriptionCreateManyProductInputSchema), z.lazy(() => CustomerSubscriptionCreateManyProductInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default CustomerSubscriptionCreateManyProductInputEnvelopeSchema;
