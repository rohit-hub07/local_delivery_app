import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCreateNestedOneWithoutProductInputSchema } from './VendorCreateNestedOneWithoutProductInputSchema';
import { CustomerSubscriptionCreateNestedManyWithoutProductInputSchema } from './CustomerSubscriptionCreateNestedManyWithoutProductInputSchema';

export const ProductCreateWithoutRequestInputSchema: z.ZodType<Prisma.ProductCreateWithoutRequestInput> = z.strictObject({
  id: z.uuid().optional(),
  productName: z.string().min(2,{message: "Product name must be of at least 2 characters"}),
  description: z.string().min(2, {message: "Product description must be of at leat 2 characters"}),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vendor: z.lazy(() => VendorCreateNestedOneWithoutProductInputSchema),
  subscription: z.lazy(() => CustomerSubscriptionCreateNestedManyWithoutProductInputSchema).optional(),
});

export default ProductCreateWithoutRequestInputSchema;
