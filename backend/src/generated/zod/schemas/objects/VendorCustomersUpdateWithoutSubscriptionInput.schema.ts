import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { VendorUpdateOneRequiredWithoutVendorcustomersNestedInputObjectSchema as VendorUpdateOneRequiredWithoutVendorcustomersNestedInputObjectSchema } from './VendorUpdateOneRequiredWithoutVendorcustomersNestedInput.schema';
import { UserUpdateOneRequiredWithoutVendorcustomersNestedInputObjectSchema as UserUpdateOneRequiredWithoutVendorcustomersNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutVendorcustomersNestedInput.schema';
import { RequestsUpdateManyWithoutVendorCustomersNestedInputObjectSchema as RequestsUpdateManyWithoutVendorCustomersNestedInputObjectSchema } from './RequestsUpdateManyWithoutVendorCustomersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  customerPhone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  vendor: z.lazy(() => VendorUpdateOneRequiredWithoutVendorcustomersNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutVendorcustomersNestedInputObjectSchema).optional(),
  request: z.lazy(() => RequestsUpdateManyWithoutVendorCustomersNestedInputObjectSchema).optional()
}).strict();
export const VendorCustomersUpdateWithoutSubscriptionInputObjectSchema: z.ZodType<Prisma.VendorCustomersUpdateWithoutSubscriptionInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersUpdateWithoutSubscriptionInput>;
export const VendorCustomersUpdateWithoutSubscriptionInputObjectZodSchema = makeSchema();
