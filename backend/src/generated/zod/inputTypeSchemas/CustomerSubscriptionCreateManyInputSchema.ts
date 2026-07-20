import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const CustomerSubscriptionCreateManyInputSchema: z.ZodType<Prisma.CustomerSubscriptionCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  vendorCustomerId: z.string(),
  productId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default CustomerSubscriptionCreateManyInputSchema;
