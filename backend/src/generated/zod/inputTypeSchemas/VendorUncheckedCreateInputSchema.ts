import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ProductUncheckedCreateNestedManyWithoutVendorInputSchema } from './ProductUncheckedCreateNestedManyWithoutVendorInputSchema';
import { VendorCustomersUncheckedCreateNestedManyWithoutVendorInputSchema } from './VendorCustomersUncheckedCreateNestedManyWithoutVendorInputSchema';

export const VendorUncheckedCreateInputSchema: z.ZodType<Prisma.VendorUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  businessName: z.string().min(2,{message: "Business name must be at least 2 characters long"}),
  businessPhone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductUncheckedCreateNestedManyWithoutVendorInputSchema).optional(),
  vendorcustomers: z.lazy(() => VendorCustomersUncheckedCreateNestedManyWithoutVendorInputSchema).optional(),
});

export default VendorUncheckedCreateInputSchema;
