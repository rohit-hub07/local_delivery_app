import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorWhereUniqueInputSchema } from './VendorWhereUniqueInputSchema';
import { VendorCreateWithoutVendorcustomersInputSchema } from './VendorCreateWithoutVendorcustomersInputSchema';
import { VendorUncheckedCreateWithoutVendorcustomersInputSchema } from './VendorUncheckedCreateWithoutVendorcustomersInputSchema';

export const VendorCreateOrConnectWithoutVendorcustomersInputSchema: z.ZodType<Prisma.VendorCreateOrConnectWithoutVendorcustomersInput> = z.strictObject({
  where: z.lazy(() => VendorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VendorCreateWithoutVendorcustomersInputSchema), z.lazy(() => VendorUncheckedCreateWithoutVendorcustomersInputSchema) ]),
});

export default VendorCreateOrConnectWithoutVendorcustomersInputSchema;
