import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ProductCreateNestedManyWithoutVendorInputSchema } from './ProductCreateNestedManyWithoutVendorInputSchema';
import { VendorCustomersCreateNestedManyWithoutVendorInputSchema } from './VendorCustomersCreateNestedManyWithoutVendorInputSchema';

export const VendorCreateWithoutUserInputSchema: z.ZodType<Prisma.VendorCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  businessName: z.string().min(2,{message: "Business name must be at least 2 characters long"}),
  businessPhone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductCreateNestedManyWithoutVendorInputSchema).optional(),
  vendorcustomers: z.lazy(() => VendorCustomersCreateNestedManyWithoutVendorInputSchema).optional(),
});

export default VendorCreateWithoutUserInputSchema;
