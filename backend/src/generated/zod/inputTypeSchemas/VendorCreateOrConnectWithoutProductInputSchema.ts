import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorWhereUniqueInputSchema } from './VendorWhereUniqueInputSchema';
import { VendorCreateWithoutProductInputSchema } from './VendorCreateWithoutProductInputSchema';
import { VendorUncheckedCreateWithoutProductInputSchema } from './VendorUncheckedCreateWithoutProductInputSchema';

export const VendorCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.VendorCreateOrConnectWithoutProductInput> = z.strictObject({
  where: z.lazy(() => VendorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VendorCreateWithoutProductInputSchema), z.lazy(() => VendorUncheckedCreateWithoutProductInputSchema) ]),
});

export default VendorCreateOrConnectWithoutProductInputSchema;
