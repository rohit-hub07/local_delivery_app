import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCustomersUpdateWithoutSubscriptionInputSchema } from './VendorCustomersUpdateWithoutSubscriptionInputSchema';
import { VendorCustomersUncheckedUpdateWithoutSubscriptionInputSchema } from './VendorCustomersUncheckedUpdateWithoutSubscriptionInputSchema';
import { VendorCustomersCreateWithoutSubscriptionInputSchema } from './VendorCustomersCreateWithoutSubscriptionInputSchema';
import { VendorCustomersUncheckedCreateWithoutSubscriptionInputSchema } from './VendorCustomersUncheckedCreateWithoutSubscriptionInputSchema';
import { VendorCustomersWhereInputSchema } from './VendorCustomersWhereInputSchema';

export const VendorCustomersUpsertWithoutSubscriptionInputSchema: z.ZodType<Prisma.VendorCustomersUpsertWithoutSubscriptionInput> = z.strictObject({
  update: z.union([ z.lazy(() => VendorCustomersUpdateWithoutSubscriptionInputSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutSubscriptionInputSchema) ]),
  create: z.union([ z.lazy(() => VendorCustomersCreateWithoutSubscriptionInputSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutSubscriptionInputSchema) ]),
  where: z.lazy(() => VendorCustomersWhereInputSchema).optional(),
});

export default VendorCustomersUpsertWithoutSubscriptionInputSchema;
