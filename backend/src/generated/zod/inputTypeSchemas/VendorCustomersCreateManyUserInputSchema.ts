import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const VendorCustomersCreateManyUserInputSchema: z.ZodType<Prisma.VendorCustomersCreateManyUserInput> = z.strictObject({
  id: z.uuid().optional(),
  vendorId: z.string(),
  customerPhone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default VendorCustomersCreateManyUserInputSchema;
