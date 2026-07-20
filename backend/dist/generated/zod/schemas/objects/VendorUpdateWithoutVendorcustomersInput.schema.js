import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutVendorNestedInputObjectSchema as UserUpdateOneRequiredWithoutVendorNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutVendorNestedInput.schema';
import { ProductUpdateManyWithoutVendorNestedInputObjectSchema as ProductUpdateManyWithoutVendorNestedInputObjectSchema } from './ProductUpdateManyWithoutVendorNestedInput.schema';
const makeSchema = () => z.object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    businessName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    businessPhone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    user: z.lazy(() => UserUpdateOneRequiredWithoutVendorNestedInputObjectSchema).optional(),
    product: z.lazy(() => ProductUpdateManyWithoutVendorNestedInputObjectSchema).optional()
}).strict();
export const VendorUpdateWithoutVendorcustomersInputObjectSchema = makeSchema();
export const VendorUpdateWithoutVendorcustomersInputObjectZodSchema = makeSchema();
