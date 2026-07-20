import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerSubscriptionWhereUniqueInputSchema } from './CustomerSubscriptionWhereUniqueInputSchema';
import { CustomerSubscriptionCreateWithoutProductInputSchema } from './CustomerSubscriptionCreateWithoutProductInputSchema';
import { CustomerSubscriptionUncheckedCreateWithoutProductInputSchema } from './CustomerSubscriptionUncheckedCreateWithoutProductInputSchema';

export const CustomerSubscriptionCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.CustomerSubscriptionCreateOrConnectWithoutProductInput> = z.strictObject({
  where: z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CustomerSubscriptionCreateWithoutProductInputSchema), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutProductInputSchema) ]),
});

export default CustomerSubscriptionCreateOrConnectWithoutProductInputSchema;
