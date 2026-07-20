import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { RequestsUncheckedUpdateManyWithoutProductNestedInputSchema } from './RequestsUncheckedUpdateManyWithoutProductNestedInputSchema';

export const ProductUncheckedUpdateWithoutSubscriptionInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutSubscriptionInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  vendorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productName: z.union([ z.string().min(2,{message: "Product name must be of at least 2 characters"}),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(2, {message: "Product description must be of at leat 2 characters"}),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  request: z.lazy(() => RequestsUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
});

export default ProductUncheckedUpdateWithoutSubscriptionInputSchema;
