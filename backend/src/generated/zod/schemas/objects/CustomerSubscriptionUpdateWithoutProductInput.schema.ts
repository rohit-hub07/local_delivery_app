import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { VendorCustomersUpdateOneRequiredWithoutSubscriptionNestedInputObjectSchema as VendorCustomersUpdateOneRequiredWithoutSubscriptionNestedInputObjectSchema } from './VendorCustomersUpdateOneRequiredWithoutSubscriptionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  vendorCustomers: z.lazy(() => VendorCustomersUpdateOneRequiredWithoutSubscriptionNestedInputObjectSchema).optional()
}).strict();
export const CustomerSubscriptionUpdateWithoutProductInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionUpdateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionUpdateWithoutProductInput>;
export const CustomerSubscriptionUpdateWithoutProductInputObjectZodSchema = makeSchema();
