import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCustomersWhereUniqueInputSchema } from './VendorCustomersWhereUniqueInputSchema';
import { VendorCustomersUpdateWithoutVendorInputSchema } from './VendorCustomersUpdateWithoutVendorInputSchema';
import { VendorCustomersUncheckedUpdateWithoutVendorInputSchema } from './VendorCustomersUncheckedUpdateWithoutVendorInputSchema';

export const VendorCustomersUpdateWithWhereUniqueWithoutVendorInputSchema: z.ZodType<Prisma.VendorCustomersUpdateWithWhereUniqueWithoutVendorInput> = z.strictObject({
  where: z.lazy(() => VendorCustomersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VendorCustomersUpdateWithoutVendorInputSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutVendorInputSchema) ]),
});

export default VendorCustomersUpdateWithWhereUniqueWithoutVendorInputSchema;
