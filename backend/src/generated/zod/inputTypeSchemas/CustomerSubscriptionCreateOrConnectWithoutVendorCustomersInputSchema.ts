import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerSubscriptionWhereUniqueInputSchema } from './CustomerSubscriptionWhereUniqueInputSchema';
import { CustomerSubscriptionCreateWithoutVendorCustomersInputSchema } from './CustomerSubscriptionCreateWithoutVendorCustomersInputSchema';
import { CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputSchema } from './CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputSchema';

export const CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputSchema: z.ZodType<Prisma.CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInput> = z.strictObject({
  where: z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CustomerSubscriptionCreateWithoutVendorCustomersInputSchema), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputSchema) ]),
});

export default CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputSchema;
