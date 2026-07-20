import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
export const VendorCustomersUncheckedUpdateManyWithoutVendorInputSchema = z.strictObject({
    id: z.union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    customerId: z.union([z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    customerPhone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
});
export default VendorCustomersUncheckedUpdateManyWithoutVendorInputSchema;
