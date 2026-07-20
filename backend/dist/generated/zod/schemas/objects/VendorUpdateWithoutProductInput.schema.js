import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutVendorNestedInputObjectSchema as UserUpdateOneRequiredWithoutVendorNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutVendorNestedInput.schema';
import { VendorCustomersUpdateManyWithoutVendorNestedInputObjectSchema as VendorCustomersUpdateManyWithoutVendorNestedInputObjectSchema } from './VendorCustomersUpdateManyWithoutVendorNestedInput.schema';
const makeSchema = () => z.object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    businessName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    businessPhone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    user: z.lazy(() => UserUpdateOneRequiredWithoutVendorNestedInputObjectSchema).optional(),
    vendorcustomers: z.lazy(() => VendorCustomersUpdateManyWithoutVendorNestedInputObjectSchema).optional()
}).strict();
export const VendorUpdateWithoutProductInputObjectSchema = makeSchema();
export const VendorUpdateWithoutProductInputObjectZodSchema = makeSchema();
