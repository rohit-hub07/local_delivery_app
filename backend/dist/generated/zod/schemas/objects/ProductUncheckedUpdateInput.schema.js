import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CustomerSubscriptionUncheckedUpdateManyWithoutProductNestedInputObjectSchema as CustomerSubscriptionUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './CustomerSubscriptionUncheckedUpdateManyWithoutProductNestedInput.schema';
import { RequestsUncheckedUpdateManyWithoutProductNestedInputObjectSchema as RequestsUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './RequestsUncheckedUpdateManyWithoutProductNestedInput.schema';
const makeSchema = () => z.object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    vendorId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    productName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    subscription: z.lazy(() => CustomerSubscriptionUncheckedUpdateManyWithoutProductNestedInputObjectSchema).optional(),
    request: z.lazy(() => RequestsUncheckedUpdateManyWithoutProductNestedInputObjectSchema).optional()
}).strict();
export const ProductUncheckedUpdateInputObjectSchema = makeSchema();
export const ProductUncheckedUpdateInputObjectZodSchema = makeSchema();
