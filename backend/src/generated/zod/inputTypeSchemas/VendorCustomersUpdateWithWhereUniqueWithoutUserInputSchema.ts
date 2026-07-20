import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCustomersWhereUniqueInputSchema } from './VendorCustomersWhereUniqueInputSchema';
import { VendorCustomersUpdateWithoutUserInputSchema } from './VendorCustomersUpdateWithoutUserInputSchema';
import { VendorCustomersUncheckedUpdateWithoutUserInputSchema } from './VendorCustomersUncheckedUpdateWithoutUserInputSchema';

export const VendorCustomersUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.VendorCustomersUpdateWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => VendorCustomersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VendorCustomersUpdateWithoutUserInputSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutUserInputSchema) ]),
});

export default VendorCustomersUpdateWithWhereUniqueWithoutUserInputSchema;
