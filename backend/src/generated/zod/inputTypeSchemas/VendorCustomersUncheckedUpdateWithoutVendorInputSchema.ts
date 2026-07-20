import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { CustomerSubscriptionUncheckedUpdateManyWithoutVendorCustomersNestedInputSchema } from './CustomerSubscriptionUncheckedUpdateManyWithoutVendorCustomersNestedInputSchema';
import { RequestsUncheckedUpdateManyWithoutVendorCustomersNestedInputSchema } from './RequestsUncheckedUpdateManyWithoutVendorCustomersNestedInputSchema';

export const VendorCustomersUncheckedUpdateWithoutVendorInputSchema: z.ZodType<Prisma.VendorCustomersUncheckedUpdateWithoutVendorInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerId: z.union([ z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerPhone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  subscription: z.lazy(() => CustomerSubscriptionUncheckedUpdateManyWithoutVendorCustomersNestedInputSchema).optional(),
  request: z.lazy(() => RequestsUncheckedUpdateManyWithoutVendorCustomersNestedInputSchema).optional(),
});

export default VendorCustomersUncheckedUpdateWithoutVendorInputSchema;
