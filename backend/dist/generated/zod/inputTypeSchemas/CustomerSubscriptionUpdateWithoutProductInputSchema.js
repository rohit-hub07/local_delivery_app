import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { VendorCustomersUpdateOneRequiredWithoutSubscriptionNestedInputSchema } from './VendorCustomersUpdateOneRequiredWithoutSubscriptionNestedInputSchema';
export const CustomerSubscriptionUpdateWithoutProductInputSchema = z.strictObject({
    id: z.union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    vendorCustomers: z.lazy(() => VendorCustomersUpdateOneRequiredWithoutSubscriptionNestedInputSchema).optional(),
});
export default CustomerSubscriptionUpdateWithoutProductInputSchema;
