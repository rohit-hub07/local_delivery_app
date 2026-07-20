import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ProductUpdateOneRequiredWithoutSubscriptionNestedInputSchema } from './ProductUpdateOneRequiredWithoutSubscriptionNestedInputSchema';
export const CustomerSubscriptionUpdateWithoutVendorCustomersInputSchema = z.strictObject({
    id: z.union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    product: z.lazy(() => ProductUpdateOneRequiredWithoutSubscriptionNestedInputSchema).optional(),
});
export default CustomerSubscriptionUpdateWithoutVendorCustomersInputSchema;
