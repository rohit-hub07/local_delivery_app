import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { VendorUpdateOneRequiredWithoutProductNestedInputSchema } from './VendorUpdateOneRequiredWithoutProductNestedInputSchema';
import { CustomerSubscriptionUpdateManyWithoutProductNestedInputSchema } from './CustomerSubscriptionUpdateManyWithoutProductNestedInputSchema';
export const ProductUpdateWithoutRequestInputSchema = z.strictObject({
    id: z.union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    productName: z.union([z.string().min(2, { message: "Product name must be of at least 2 characters" }), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    description: z.union([z.string().min(2, { message: "Product description must be of at leat 2 characters" }), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    vendor: z.lazy(() => VendorUpdateOneRequiredWithoutProductNestedInputSchema).optional(),
    subscription: z.lazy(() => CustomerSubscriptionUpdateManyWithoutProductNestedInputSchema).optional(),
});
export default ProductUpdateWithoutRequestInputSchema;
