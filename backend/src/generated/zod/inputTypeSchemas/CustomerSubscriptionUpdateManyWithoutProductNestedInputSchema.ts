import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerSubscriptionCreateWithoutProductInputSchema } from './CustomerSubscriptionCreateWithoutProductInputSchema';
import { CustomerSubscriptionUncheckedCreateWithoutProductInputSchema } from './CustomerSubscriptionUncheckedCreateWithoutProductInputSchema';
import { CustomerSubscriptionCreateOrConnectWithoutProductInputSchema } from './CustomerSubscriptionCreateOrConnectWithoutProductInputSchema';
import { CustomerSubscriptionUpsertWithWhereUniqueWithoutProductInputSchema } from './CustomerSubscriptionUpsertWithWhereUniqueWithoutProductInputSchema';
import { CustomerSubscriptionCreateManyProductInputEnvelopeSchema } from './CustomerSubscriptionCreateManyProductInputEnvelopeSchema';
import { CustomerSubscriptionWhereUniqueInputSchema } from './CustomerSubscriptionWhereUniqueInputSchema';
import { CustomerSubscriptionUpdateWithWhereUniqueWithoutProductInputSchema } from './CustomerSubscriptionUpdateWithWhereUniqueWithoutProductInputSchema';
import { CustomerSubscriptionUpdateManyWithWhereWithoutProductInputSchema } from './CustomerSubscriptionUpdateManyWithWhereWithoutProductInputSchema';
import { CustomerSubscriptionScalarWhereInputSchema } from './CustomerSubscriptionScalarWhereInputSchema';

export const CustomerSubscriptionUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.CustomerSubscriptionUpdateManyWithoutProductNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CustomerSubscriptionCreateWithoutProductInputSchema), z.lazy(() => CustomerSubscriptionCreateWithoutProductInputSchema).array(), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutProductInputSchema), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CustomerSubscriptionCreateOrConnectWithoutProductInputSchema), z.lazy(() => CustomerSubscriptionCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CustomerSubscriptionUpsertWithWhereUniqueWithoutProductInputSchema), z.lazy(() => CustomerSubscriptionUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CustomerSubscriptionCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CustomerSubscriptionUpdateWithWhereUniqueWithoutProductInputSchema), z.lazy(() => CustomerSubscriptionUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CustomerSubscriptionUpdateManyWithWhereWithoutProductInputSchema), z.lazy(() => CustomerSubscriptionUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CustomerSubscriptionScalarWhereInputSchema), z.lazy(() => CustomerSubscriptionScalarWhereInputSchema).array() ]).optional(),
});

export default CustomerSubscriptionUpdateManyWithoutProductNestedInputSchema;
