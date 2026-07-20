import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorWhereUniqueInputSchema } from './VendorWhereUniqueInputSchema';
import { VendorCreateWithoutUserInputSchema } from './VendorCreateWithoutUserInputSchema';
import { VendorUncheckedCreateWithoutUserInputSchema } from './VendorUncheckedCreateWithoutUserInputSchema';

export const VendorCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.VendorCreateOrConnectWithoutUserInput> = z.strictObject({
  where: z.lazy(() => VendorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VendorCreateWithoutUserInputSchema), z.lazy(() => VendorUncheckedCreateWithoutUserInputSchema) ]),
});

export default VendorCreateOrConnectWithoutUserInputSchema;
