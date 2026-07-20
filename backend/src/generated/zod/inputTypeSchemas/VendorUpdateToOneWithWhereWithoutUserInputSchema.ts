import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorWhereInputSchema } from './VendorWhereInputSchema';
import { VendorUpdateWithoutUserInputSchema } from './VendorUpdateWithoutUserInputSchema';
import { VendorUncheckedUpdateWithoutUserInputSchema } from './VendorUncheckedUpdateWithoutUserInputSchema';

export const VendorUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.VendorUpdateToOneWithWhereWithoutUserInput> = z.strictObject({
  where: z.lazy(() => VendorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => VendorUpdateWithoutUserInputSchema), z.lazy(() => VendorUncheckedUpdateWithoutUserInputSchema) ]),
});

export default VendorUpdateToOneWithWhereWithoutUserInputSchema;
