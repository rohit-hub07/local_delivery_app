import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { VendorUpdateOneRequiredWithoutVendorcustomersNestedInputObjectSchema as VendorUpdateOneRequiredWithoutVendorcustomersNestedInputObjectSchema } from './VendorUpdateOneRequiredWithoutVendorcustomersNestedInput.schema';
import { CustomerSubscriptionUpdateManyWithoutVendorCustomersNestedInputObjectSchema as CustomerSubscriptionUpdateManyWithoutVendorCustomersNestedInputObjectSchema } from './CustomerSubscriptionUpdateManyWithoutVendorCustomersNestedInput.schema';
import { RequestsUpdateManyWithoutVendorCustomersNestedInputObjectSchema as RequestsUpdateManyWithoutVendorCustomersNestedInputObjectSchema } from './RequestsUpdateManyWithoutVendorCustomersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  customerPhone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  vendor: z.lazy(() => VendorUpdateOneRequiredWithoutVendorcustomersNestedInputObjectSchema).optional(),
  subscription: z.lazy(() => CustomerSubscriptionUpdateManyWithoutVendorCustomersNestedInputObjectSchema).optional(),
  request: z.lazy(() => RequestsUpdateManyWithoutVendorCustomersNestedInputObjectSchema).optional()
}).strict();
export const VendorCustomersUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.VendorCustomersUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersUpdateWithoutUserInput>;
export const VendorCustomersUpdateWithoutUserInputObjectZodSchema = makeSchema();
