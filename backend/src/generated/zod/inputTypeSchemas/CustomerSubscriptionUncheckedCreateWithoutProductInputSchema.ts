import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const CustomerSubscriptionUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.CustomerSubscriptionUncheckedCreateWithoutProductInput> = z.strictObject({
  id: z.uuid().optional(),
  vendorCustomerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default CustomerSubscriptionUncheckedCreateWithoutProductInputSchema;
