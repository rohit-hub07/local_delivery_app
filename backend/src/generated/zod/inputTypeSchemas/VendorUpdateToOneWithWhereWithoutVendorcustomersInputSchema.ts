import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorWhereInputSchema } from './VendorWhereInputSchema';
import { VendorUpdateWithoutVendorcustomersInputSchema } from './VendorUpdateWithoutVendorcustomersInputSchema';
import { VendorUncheckedUpdateWithoutVendorcustomersInputSchema } from './VendorUncheckedUpdateWithoutVendorcustomersInputSchema';

export const VendorUpdateToOneWithWhereWithoutVendorcustomersInputSchema: z.ZodType<Prisma.VendorUpdateToOneWithWhereWithoutVendorcustomersInput> = z.strictObject({
  where: z.lazy(() => VendorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => VendorUpdateWithoutVendorcustomersInputSchema), z.lazy(() => VendorUncheckedUpdateWithoutVendorcustomersInputSchema) ]),
});

export default VendorUpdateToOneWithWhereWithoutVendorcustomersInputSchema;
