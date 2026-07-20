import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { RequestsUncheckedUpdateManyWithoutVendorCustomersNestedInputObjectSchema as RequestsUncheckedUpdateManyWithoutVendorCustomersNestedInputObjectSchema } from './RequestsUncheckedUpdateManyWithoutVendorCustomersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  vendorId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  customerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  customerPhone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  request: z.lazy(() => RequestsUncheckedUpdateManyWithoutVendorCustomersNestedInputObjectSchema).optional()
}).strict();
export const VendorCustomersUncheckedUpdateWithoutSubscriptionInputObjectSchema: z.ZodType<Prisma.VendorCustomersUncheckedUpdateWithoutSubscriptionInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersUncheckedUpdateWithoutSubscriptionInput>;
export const VendorCustomersUncheckedUpdateWithoutSubscriptionInputObjectZodSchema = makeSchema();
