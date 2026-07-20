import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { VendorUpdateOneRequiredWithoutVendorcustomersNestedInputSchema } from './VendorUpdateOneRequiredWithoutVendorcustomersNestedInputSchema';
import { CustomerSubscriptionUpdateManyWithoutVendorCustomersNestedInputSchema } from './CustomerSubscriptionUpdateManyWithoutVendorCustomersNestedInputSchema';
import { RequestsUpdateManyWithoutVendorCustomersNestedInputSchema } from './RequestsUpdateManyWithoutVendorCustomersNestedInputSchema';

export const VendorCustomersUpdateWithoutUserInputSchema: z.ZodType<Prisma.VendorCustomersUpdateWithoutUserInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerPhone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  vendor: z.lazy(() => VendorUpdateOneRequiredWithoutVendorcustomersNestedInputSchema).optional(),
  subscription: z.lazy(() => CustomerSubscriptionUpdateManyWithoutVendorCustomersNestedInputSchema).optional(),
  request: z.lazy(() => RequestsUpdateManyWithoutVendorCustomersNestedInputSchema).optional(),
});

export default VendorCustomersUpdateWithoutUserInputSchema;
