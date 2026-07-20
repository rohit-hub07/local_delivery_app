import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const CustomerSubscriptionCreateManyVendorCustomersInputSchema: z.ZodType<Prisma.CustomerSubscriptionCreateManyVendorCustomersInput> = z.strictObject({
  id: z.uuid().optional(),
  productId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default CustomerSubscriptionCreateManyVendorCustomersInputSchema;
