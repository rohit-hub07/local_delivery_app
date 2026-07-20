import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCustomersCreateWithoutSubscriptionInputSchema } from './VendorCustomersCreateWithoutSubscriptionInputSchema';
import { VendorCustomersUncheckedCreateWithoutSubscriptionInputSchema } from './VendorCustomersUncheckedCreateWithoutSubscriptionInputSchema';
import { VendorCustomersCreateOrConnectWithoutSubscriptionInputSchema } from './VendorCustomersCreateOrConnectWithoutSubscriptionInputSchema';
import { VendorCustomersWhereUniqueInputSchema } from './VendorCustomersWhereUniqueInputSchema';

export const VendorCustomersCreateNestedOneWithoutSubscriptionInputSchema: z.ZodType<Prisma.VendorCustomersCreateNestedOneWithoutSubscriptionInput> = z.strictObject({
  create: z.union([ z.lazy(() => VendorCustomersCreateWithoutSubscriptionInputSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutSubscriptionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VendorCustomersCreateOrConnectWithoutSubscriptionInputSchema).optional(),
  connect: z.lazy(() => VendorCustomersWhereUniqueInputSchema).optional(),
});

export default VendorCustomersCreateNestedOneWithoutSubscriptionInputSchema;
