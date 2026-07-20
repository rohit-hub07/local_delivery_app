import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProductUncheckedUpdateManyWithoutVendorNestedInputObjectSchema as ProductUncheckedUpdateManyWithoutVendorNestedInputObjectSchema } from './ProductUncheckedUpdateManyWithoutVendorNestedInput.schema';
import { VendorCustomersUncheckedUpdateManyWithoutVendorNestedInputObjectSchema as VendorCustomersUncheckedUpdateManyWithoutVendorNestedInputObjectSchema } from './VendorCustomersUncheckedUpdateManyWithoutVendorNestedInput.schema';
const makeSchema = () => z.object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    businessName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    businessPhone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    product: z.lazy(() => ProductUncheckedUpdateManyWithoutVendorNestedInputObjectSchema).optional(),
    vendorcustomers: z.lazy(() => VendorCustomersUncheckedUpdateManyWithoutVendorNestedInputObjectSchema).optional()
}).strict();
export const VendorUncheckedUpdateWithoutUserInputObjectSchema = makeSchema();
export const VendorUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
