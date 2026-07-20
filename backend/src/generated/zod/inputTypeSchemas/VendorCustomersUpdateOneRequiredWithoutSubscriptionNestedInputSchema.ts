import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCustomersCreateWithoutSubscriptionInputSchema } from './VendorCustomersCreateWithoutSubscriptionInputSchema';
import { VendorCustomersUncheckedCreateWithoutSubscriptionInputSchema } from './VendorCustomersUncheckedCreateWithoutSubscriptionInputSchema';
import { VendorCustomersCreateOrConnectWithoutSubscriptionInputSchema } from './VendorCustomersCreateOrConnectWithoutSubscriptionInputSchema';
import { VendorCustomersUpsertWithoutSubscriptionInputSchema } from './VendorCustomersUpsertWithoutSubscriptionInputSchema';
import { VendorCustomersWhereUniqueInputSchema } from './VendorCustomersWhereUniqueInputSchema';
import { VendorCustomersUpdateToOneWithWhereWithoutSubscriptionInputSchema } from './VendorCustomersUpdateToOneWithWhereWithoutSubscriptionInputSchema';
import { VendorCustomersUpdateWithoutSubscriptionInputSchema } from './VendorCustomersUpdateWithoutSubscriptionInputSchema';
import { VendorCustomersUncheckedUpdateWithoutSubscriptionInputSchema } from './VendorCustomersUncheckedUpdateWithoutSubscriptionInputSchema';

export const VendorCustomersUpdateOneRequiredWithoutSubscriptionNestedInputSchema: z.ZodType<Prisma.VendorCustomersUpdateOneRequiredWithoutSubscriptionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => VendorCustomersCreateWithoutSubscriptionInputSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutSubscriptionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VendorCustomersCreateOrConnectWithoutSubscriptionInputSchema).optional(),
  upsert: z.lazy(() => VendorCustomersUpsertWithoutSubscriptionInputSchema).optional(),
  connect: z.lazy(() => VendorCustomersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => VendorCustomersUpdateToOneWithWhereWithoutSubscriptionInputSchema), z.lazy(() => VendorCustomersUpdateWithoutSubscriptionInputSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutSubscriptionInputSchema) ]).optional(),
});

export default VendorCustomersUpdateOneRequiredWithoutSubscriptionNestedInputSchema;
