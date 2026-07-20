import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerSubscriptionScalarWhereInputSchema } from './CustomerSubscriptionScalarWhereInputSchema';
import { CustomerSubscriptionUpdateManyMutationInputSchema } from './CustomerSubscriptionUpdateManyMutationInputSchema';
import { CustomerSubscriptionUncheckedUpdateManyWithoutVendorCustomersInputSchema } from './CustomerSubscriptionUncheckedUpdateManyWithoutVendorCustomersInputSchema';

export const CustomerSubscriptionUpdateManyWithWhereWithoutVendorCustomersInputSchema: z.ZodType<Prisma.CustomerSubscriptionUpdateManyWithWhereWithoutVendorCustomersInput> = z.strictObject({
  where: z.lazy(() => CustomerSubscriptionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CustomerSubscriptionUpdateManyMutationInputSchema), z.lazy(() => CustomerSubscriptionUncheckedUpdateManyWithoutVendorCustomersInputSchema) ]),
});

export default CustomerSubscriptionUpdateManyWithWhereWithoutVendorCustomersInputSchema;
