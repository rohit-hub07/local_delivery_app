import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCreateNestedOneWithoutVendorcustomersInputSchema } from './VendorCreateNestedOneWithoutVendorcustomersInputSchema';
import { UserCreateNestedOneWithoutVendorcustomersInputSchema } from './UserCreateNestedOneWithoutVendorcustomersInputSchema';
import { CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInputSchema } from './CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInputSchema';
import { RequestsCreateNestedManyWithoutVendorCustomersInputSchema } from './RequestsCreateNestedManyWithoutVendorCustomersInputSchema';

export const VendorCustomersCreateInputSchema: z.ZodType<Prisma.VendorCustomersCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  customerPhone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vendor: z.lazy(() => VendorCreateNestedOneWithoutVendorcustomersInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutVendorcustomersInputSchema),
  subscription: z.lazy(() => CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInputSchema).optional(),
  request: z.lazy(() => RequestsCreateNestedManyWithoutVendorCustomersInputSchema).optional(),
});

export default VendorCustomersCreateInputSchema;
