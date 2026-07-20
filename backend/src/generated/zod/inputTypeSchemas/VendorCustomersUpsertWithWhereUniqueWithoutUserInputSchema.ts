import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCustomersWhereUniqueInputSchema } from './VendorCustomersWhereUniqueInputSchema';
import { VendorCustomersUpdateWithoutUserInputSchema } from './VendorCustomersUpdateWithoutUserInputSchema';
import { VendorCustomersUncheckedUpdateWithoutUserInputSchema } from './VendorCustomersUncheckedUpdateWithoutUserInputSchema';
import { VendorCustomersCreateWithoutUserInputSchema } from './VendorCustomersCreateWithoutUserInputSchema';
import { VendorCustomersUncheckedCreateWithoutUserInputSchema } from './VendorCustomersUncheckedCreateWithoutUserInputSchema';

export const VendorCustomersUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.VendorCustomersUpsertWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => VendorCustomersWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VendorCustomersUpdateWithoutUserInputSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => VendorCustomersCreateWithoutUserInputSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutUserInputSchema) ]),
});

export default VendorCustomersUpsertWithWhereUniqueWithoutUserInputSchema;
