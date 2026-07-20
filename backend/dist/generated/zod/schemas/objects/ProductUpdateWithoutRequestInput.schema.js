import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { VendorUpdateOneRequiredWithoutProductNestedInputObjectSchema as VendorUpdateOneRequiredWithoutProductNestedInputObjectSchema } from './VendorUpdateOneRequiredWithoutProductNestedInput.schema';
import { CustomerSubscriptionUpdateManyWithoutProductNestedInputObjectSchema as CustomerSubscriptionUpdateManyWithoutProductNestedInputObjectSchema } from './CustomerSubscriptionUpdateManyWithoutProductNestedInput.schema';
const makeSchema = () => z.object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    productName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    vendor: z.lazy(() => VendorUpdateOneRequiredWithoutProductNestedInputObjectSchema).optional(),
    subscription: z.lazy(() => CustomerSubscriptionUpdateManyWithoutProductNestedInputObjectSchema).optional()
}).strict();
export const ProductUpdateWithoutRequestInputObjectSchema = makeSchema();
export const ProductUpdateWithoutRequestInputObjectZodSchema = makeSchema();
