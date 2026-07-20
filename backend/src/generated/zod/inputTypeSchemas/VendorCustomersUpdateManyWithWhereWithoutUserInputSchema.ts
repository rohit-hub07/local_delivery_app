import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCustomersScalarWhereInputSchema } from './VendorCustomersScalarWhereInputSchema';
import { VendorCustomersUpdateManyMutationInputSchema } from './VendorCustomersUpdateManyMutationInputSchema';
import { VendorCustomersUncheckedUpdateManyWithoutUserInputSchema } from './VendorCustomersUncheckedUpdateManyWithoutUserInputSchema';

export const VendorCustomersUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.VendorCustomersUpdateManyWithWhereWithoutUserInput> = z.strictObject({
  where: z.lazy(() => VendorCustomersScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VendorCustomersUpdateManyMutationInputSchema), z.lazy(() => VendorCustomersUncheckedUpdateManyWithoutUserInputSchema) ]),
});

export default VendorCustomersUpdateManyWithWhereWithoutUserInputSchema;
