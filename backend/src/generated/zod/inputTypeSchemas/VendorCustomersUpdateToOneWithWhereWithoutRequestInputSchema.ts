import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCustomersWhereInputSchema } from './VendorCustomersWhereInputSchema';
import { VendorCustomersUpdateWithoutRequestInputSchema } from './VendorCustomersUpdateWithoutRequestInputSchema';
import { VendorCustomersUncheckedUpdateWithoutRequestInputSchema } from './VendorCustomersUncheckedUpdateWithoutRequestInputSchema';

export const VendorCustomersUpdateToOneWithWhereWithoutRequestInputSchema: z.ZodType<Prisma.VendorCustomersUpdateToOneWithWhereWithoutRequestInput> = z.strictObject({
  where: z.lazy(() => VendorCustomersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => VendorCustomersUpdateWithoutRequestInputSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutRequestInputSchema) ]),
});

export default VendorCustomersUpdateToOneWithWhereWithoutRequestInputSchema;
