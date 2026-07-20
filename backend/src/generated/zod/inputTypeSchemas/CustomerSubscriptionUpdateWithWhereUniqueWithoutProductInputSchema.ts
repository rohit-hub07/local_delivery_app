import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerSubscriptionWhereUniqueInputSchema } from './CustomerSubscriptionWhereUniqueInputSchema';
import { CustomerSubscriptionUpdateWithoutProductInputSchema } from './CustomerSubscriptionUpdateWithoutProductInputSchema';
import { CustomerSubscriptionUncheckedUpdateWithoutProductInputSchema } from './CustomerSubscriptionUncheckedUpdateWithoutProductInputSchema';

export const CustomerSubscriptionUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.CustomerSubscriptionUpdateWithWhereUniqueWithoutProductInput> = z.strictObject({
  where: z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CustomerSubscriptionUpdateWithoutProductInputSchema), z.lazy(() => CustomerSubscriptionUncheckedUpdateWithoutProductInputSchema) ]),
});

export default CustomerSubscriptionUpdateWithWhereUniqueWithoutProductInputSchema;
