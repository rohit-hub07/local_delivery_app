import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProductUpdateOneRequiredWithoutSubscriptionNestedInputObjectSchema as ProductUpdateOneRequiredWithoutSubscriptionNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutSubscriptionNestedInput.schema';
const makeSchema = () => z.object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    product: z.lazy(() => ProductUpdateOneRequiredWithoutSubscriptionNestedInputObjectSchema).optional()
}).strict();
export const CustomerSubscriptionUpdateWithoutVendorCustomersInputObjectSchema = makeSchema();
export const CustomerSubscriptionUpdateWithoutVendorCustomersInputObjectZodSchema = makeSchema();
