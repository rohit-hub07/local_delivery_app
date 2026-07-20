import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCustomersCreateWithoutUserInputSchema } from './VendorCustomersCreateWithoutUserInputSchema';
import { VendorCustomersUncheckedCreateWithoutUserInputSchema } from './VendorCustomersUncheckedCreateWithoutUserInputSchema';
import { VendorCustomersCreateOrConnectWithoutUserInputSchema } from './VendorCustomersCreateOrConnectWithoutUserInputSchema';
import { VendorCustomersUpsertWithWhereUniqueWithoutUserInputSchema } from './VendorCustomersUpsertWithWhereUniqueWithoutUserInputSchema';
import { VendorCustomersCreateManyUserInputEnvelopeSchema } from './VendorCustomersCreateManyUserInputEnvelopeSchema';
import { VendorCustomersWhereUniqueInputSchema } from './VendorCustomersWhereUniqueInputSchema';
import { VendorCustomersUpdateWithWhereUniqueWithoutUserInputSchema } from './VendorCustomersUpdateWithWhereUniqueWithoutUserInputSchema';
import { VendorCustomersUpdateManyWithWhereWithoutUserInputSchema } from './VendorCustomersUpdateManyWithWhereWithoutUserInputSchema';
import { VendorCustomersScalarWhereInputSchema } from './VendorCustomersScalarWhereInputSchema';

export const VendorCustomersUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.VendorCustomersUncheckedUpdateManyWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => VendorCustomersCreateWithoutUserInputSchema), z.lazy(() => VendorCustomersCreateWithoutUserInputSchema).array(), z.lazy(() => VendorCustomersUncheckedCreateWithoutUserInputSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VendorCustomersCreateOrConnectWithoutUserInputSchema), z.lazy(() => VendorCustomersCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VendorCustomersUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => VendorCustomersUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VendorCustomersCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VendorCustomersWhereUniqueInputSchema), z.lazy(() => VendorCustomersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VendorCustomersWhereUniqueInputSchema), z.lazy(() => VendorCustomersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VendorCustomersWhereUniqueInputSchema), z.lazy(() => VendorCustomersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VendorCustomersWhereUniqueInputSchema), z.lazy(() => VendorCustomersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VendorCustomersUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => VendorCustomersUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VendorCustomersUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => VendorCustomersUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VendorCustomersScalarWhereInputSchema), z.lazy(() => VendorCustomersScalarWhereInputSchema).array() ]).optional(),
});

export default VendorCustomersUncheckedUpdateManyWithoutUserNestedInputSchema;
