import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCustomersWhereInputSchema } from './VendorCustomersWhereInputSchema';
import { VendorCustomersUpdateWithoutSubscriptionInputSchema } from './VendorCustomersUpdateWithoutSubscriptionInputSchema';
import { VendorCustomersUncheckedUpdateWithoutSubscriptionInputSchema } from './VendorCustomersUncheckedUpdateWithoutSubscriptionInputSchema';

export const VendorCustomersUpdateToOneWithWhereWithoutSubscriptionInputSchema: z.ZodType<Prisma.VendorCustomersUpdateToOneWithWhereWithoutSubscriptionInput> = z.strictObject({
  where: z.lazy(() => VendorCustomersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => VendorCustomersUpdateWithoutSubscriptionInputSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutSubscriptionInputSchema) ]),
});

export default VendorCustomersUpdateToOneWithWhereWithoutSubscriptionInputSchema;
