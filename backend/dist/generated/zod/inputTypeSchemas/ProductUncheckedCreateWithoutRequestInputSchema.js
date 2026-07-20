import { z } from 'zod';
import { CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInputSchema } from './CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInputSchema';
export const ProductUncheckedCreateWithoutRequestInputSchema = z.strictObject({
    id: z.uuid().optional(),
    vendorId: z.string(),
    productName: z.string().min(2, { message: "Product name must be of at least 2 characters" }),
    description: z.string().min(2, { message: "Product description must be of at leat 2 characters" }),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    subscription: z.lazy(() => CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
});
export default ProductUncheckedCreateWithoutRequestInputSchema;
