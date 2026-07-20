import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerSubscriptionCreateWithoutProductInputSchema } from './CustomerSubscriptionCreateWithoutProductInputSchema';
import { CustomerSubscriptionUncheckedCreateWithoutProductInputSchema } from './CustomerSubscriptionUncheckedCreateWithoutProductInputSchema';
import { CustomerSubscriptionCreateOrConnectWithoutProductInputSchema } from './CustomerSubscriptionCreateOrConnectWithoutProductInputSchema';
import { CustomerSubscriptionCreateManyProductInputEnvelopeSchema } from './CustomerSubscriptionCreateManyProductInputEnvelopeSchema';
import { CustomerSubscriptionWhereUniqueInputSchema } from './CustomerSubscriptionWhereUniqueInputSchema';

export const CustomerSubscriptionCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.CustomerSubscriptionCreateNestedManyWithoutProductInput> = z.strictObject({
  create: z.union([ z.lazy(() => CustomerSubscriptionCreateWithoutProductInputSchema), z.lazy(() => CustomerSubscriptionCreateWithoutProductInputSchema).array(), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutProductInputSchema), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CustomerSubscriptionCreateOrConnectWithoutProductInputSchema), z.lazy(() => CustomerSubscriptionCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CustomerSubscriptionCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema).array() ]).optional(),
});

export default CustomerSubscriptionCreateNestedManyWithoutProductInputSchema;
