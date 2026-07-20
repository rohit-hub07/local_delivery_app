import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCustomersWhereUniqueInputSchema } from './VendorCustomersWhereUniqueInputSchema';
import { VendorCustomersCreateWithoutVendorInputSchema } from './VendorCustomersCreateWithoutVendorInputSchema';
import { VendorCustomersUncheckedCreateWithoutVendorInputSchema } from './VendorCustomersUncheckedCreateWithoutVendorInputSchema';

export const VendorCustomersCreateOrConnectWithoutVendorInputSchema: z.ZodType<Prisma.VendorCustomersCreateOrConnectWithoutVendorInput> = z.strictObject({
  where: z.lazy(() => VendorCustomersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VendorCustomersCreateWithoutVendorInputSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutVendorInputSchema) ]),
});

export default VendorCustomersCreateOrConnectWithoutVendorInputSchema;
