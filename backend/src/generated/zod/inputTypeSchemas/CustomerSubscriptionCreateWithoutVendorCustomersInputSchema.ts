import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ProductCreateNestedOneWithoutSubscriptionInputSchema } from './ProductCreateNestedOneWithoutSubscriptionInputSchema';

export const CustomerSubscriptionCreateWithoutVendorCustomersInputSchema: z.ZodType<Prisma.CustomerSubscriptionCreateWithoutVendorCustomersInput> = z.strictObject({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutSubscriptionInputSchema),
});

export default CustomerSubscriptionCreateWithoutVendorCustomersInputSchema;
