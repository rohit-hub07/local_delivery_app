import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerSubscriptionWhereUniqueInputSchema } from './CustomerSubscriptionWhereUniqueInputSchema';
import { CustomerSubscriptionUpdateWithoutProductInputSchema } from './CustomerSubscriptionUpdateWithoutProductInputSchema';
import { CustomerSubscriptionUncheckedUpdateWithoutProductInputSchema } from './CustomerSubscriptionUncheckedUpdateWithoutProductInputSchema';
import { CustomerSubscriptionCreateWithoutProductInputSchema } from './CustomerSubscriptionCreateWithoutProductInputSchema';
import { CustomerSubscriptionUncheckedCreateWithoutProductInputSchema } from './CustomerSubscriptionUncheckedCreateWithoutProductInputSchema';

export const CustomerSubscriptionUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.CustomerSubscriptionUpsertWithWhereUniqueWithoutProductInput> = z.strictObject({
  where: z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CustomerSubscriptionUpdateWithoutProductInputSchema), z.lazy(() => CustomerSubscriptionUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => CustomerSubscriptionCreateWithoutProductInputSchema), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutProductInputSchema) ]),
});

export default CustomerSubscriptionUpsertWithWhereUniqueWithoutProductInputSchema;
