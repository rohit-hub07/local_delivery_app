import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCustomersCreateNestedOneWithoutSubscriptionInputSchema } from './VendorCustomersCreateNestedOneWithoutSubscriptionInputSchema';

export const CustomerSubscriptionCreateWithoutProductInputSchema: z.ZodType<Prisma.CustomerSubscriptionCreateWithoutProductInput> = z.strictObject({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vendorCustomers: z.lazy(() => VendorCustomersCreateNestedOneWithoutSubscriptionInputSchema),
});

export default CustomerSubscriptionCreateWithoutProductInputSchema;
