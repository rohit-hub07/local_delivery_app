import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCreateNestedOneWithoutVendorcustomersInputSchema } from './VendorCreateNestedOneWithoutVendorcustomersInputSchema';
import { UserCreateNestedOneWithoutVendorcustomersInputSchema } from './UserCreateNestedOneWithoutVendorcustomersInputSchema';
import { RequestsCreateNestedManyWithoutVendorCustomersInputSchema } from './RequestsCreateNestedManyWithoutVendorCustomersInputSchema';

export const VendorCustomersCreateWithoutSubscriptionInputSchema: z.ZodType<Prisma.VendorCustomersCreateWithoutSubscriptionInput> = z.strictObject({
  id: z.uuid().optional(),
  customerPhone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vendor: z.lazy(() => VendorCreateNestedOneWithoutVendorcustomersInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutVendorcustomersInputSchema),
  request: z.lazy(() => RequestsCreateNestedManyWithoutVendorCustomersInputSchema).optional(),
});

export default VendorCustomersCreateWithoutSubscriptionInputSchema;
