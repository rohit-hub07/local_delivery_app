import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const VendorCustomersVendorIdCustomerIdCompoundUniqueInputSchema: z.ZodType<Prisma.VendorCustomersVendorIdCustomerIdCompoundUniqueInput> = z.strictObject({
  vendorId: z.string(),
  customerId: z.string(),
});

export default VendorCustomersVendorIdCustomerIdCompoundUniqueInputSchema;
