import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { VendorCustomersUpdateOneRequiredWithoutSubscriptionNestedInputObjectSchema as VendorCustomersUpdateOneRequiredWithoutSubscriptionNestedInputObjectSchema } from './VendorCustomersUpdateOneRequiredWithoutSubscriptionNestedInput.schema';
import { ProductUpdateOneRequiredWithoutSubscriptionNestedInputObjectSchema as ProductUpdateOneRequiredWithoutSubscriptionNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutSubscriptionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  vendorCustomers: z.lazy(() => VendorCustomersUpdateOneRequiredWithoutSubscriptionNestedInputObjectSchema).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutSubscriptionNestedInputObjectSchema).optional()
}).strict();
export const CustomerSubscriptionUpdateInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionUpdateInput>;
export const CustomerSubscriptionUpdateInputObjectZodSchema = makeSchema();
