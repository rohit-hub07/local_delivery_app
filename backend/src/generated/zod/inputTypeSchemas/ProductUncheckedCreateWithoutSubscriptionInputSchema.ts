import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RequestsUncheckedCreateNestedManyWithoutProductInputSchema } from './RequestsUncheckedCreateNestedManyWithoutProductInputSchema';

export const ProductUncheckedCreateWithoutSubscriptionInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutSubscriptionInput> = z.strictObject({
  id: z.uuid().optional(),
  vendorId: z.string(),
  productName: z.string().min(2,{message: "Product name must be of at least 2 characters"}),
  description: z.string().min(2, {message: "Product description must be of at leat 2 characters"}),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  request: z.lazy(() => RequestsUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
});

export default ProductUncheckedCreateWithoutSubscriptionInputSchema;
