import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutVendorNestedInputSchema } from './UserUpdateOneRequiredWithoutVendorNestedInputSchema';
import { VendorCustomersUpdateManyWithoutVendorNestedInputSchema } from './VendorCustomersUpdateManyWithoutVendorNestedInputSchema';
export const VendorUpdateWithoutProductInputSchema = z.strictObject({
    id: z.union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    businessName: z.union([z.string().min(2, { message: "Business name must be at least 2 characters long" }), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    businessPhone: z.union([z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    user: z.lazy(() => UserUpdateOneRequiredWithoutVendorNestedInputSchema).optional(),
    vendorcustomers: z.lazy(() => VendorCustomersUpdateManyWithoutVendorNestedInputSchema).optional(),
});
export default VendorUpdateWithoutProductInputSchema;
