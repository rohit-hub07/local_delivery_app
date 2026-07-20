import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerSubscriptionCreateNestedManyWithoutProductInputSchema } from './CustomerSubscriptionCreateNestedManyWithoutProductInputSchema';
import { RequestsCreateNestedManyWithoutProductInputSchema } from './RequestsCreateNestedManyWithoutProductInputSchema';

export const ProductCreateWithoutVendorInputSchema: z.ZodType<Prisma.ProductCreateWithoutVendorInput> = z.strictObject({
  id: z.uuid().optional(),
  productName: z.string().min(2,{message: "Product name must be of at least 2 characters"}),
  description: z.string().min(2, {message: "Product description must be of at leat 2 characters"}),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  subscription: z.lazy(() => CustomerSubscriptionCreateNestedManyWithoutProductInputSchema).optional(),
  request: z.lazy(() => RequestsCreateNestedManyWithoutProductInputSchema).optional(),
});

export default ProductCreateWithoutVendorInputSchema;
