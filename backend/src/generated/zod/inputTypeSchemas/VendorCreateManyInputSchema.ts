import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const VendorCreateManyInputSchema: z.ZodType<Prisma.VendorCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  businessName: z.string().min(2,{message: "Business name must be at least 2 characters long"}),
  businessPhone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default VendorCreateManyInputSchema;
