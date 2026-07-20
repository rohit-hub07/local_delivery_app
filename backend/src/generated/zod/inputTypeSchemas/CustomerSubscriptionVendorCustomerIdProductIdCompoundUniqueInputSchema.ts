import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInputSchema: z.ZodType<Prisma.CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInput> = z.strictObject({
  vendorCustomerId: z.string(),
  productId: z.string(),
});

export default CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInputSchema;
