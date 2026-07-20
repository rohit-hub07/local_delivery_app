import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CustomerSubscriptionUpdateManyWithoutProductNestedInputObjectSchema as CustomerSubscriptionUpdateManyWithoutProductNestedInputObjectSchema } from './CustomerSubscriptionUpdateManyWithoutProductNestedInput.schema';
import { RequestsUpdateManyWithoutProductNestedInputObjectSchema as RequestsUpdateManyWithoutProductNestedInputObjectSchema } from './RequestsUpdateManyWithoutProductNestedInput.schema';
const makeSchema = () => z.object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    productName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    subscription: z.lazy(() => CustomerSubscriptionUpdateManyWithoutProductNestedInputObjectSchema).optional(),
    request: z.lazy(() => RequestsUpdateManyWithoutProductNestedInputObjectSchema).optional()
}).strict();
export const ProductUpdateWithoutVendorInputObjectSchema = makeSchema();
export const ProductUpdateWithoutVendorInputObjectZodSchema = makeSchema();
