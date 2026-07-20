import { z } from 'zod';
import { CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInputSchema } from './CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInputSchema';
import { RequestsUncheckedCreateNestedManyWithoutProductInputSchema } from './RequestsUncheckedCreateNestedManyWithoutProductInputSchema';
export const ProductUncheckedCreateWithoutVendorInputSchema = z.strictObject({
    id: z.uuid().optional(),
    productName: z.string().min(2, { message: "Product name must be of at least 2 characters" }),
    description: z.string().min(2, { message: "Product description must be of at leat 2 characters" }),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    subscription: z.lazy(() => CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
    request: z.lazy(() => RequestsUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
});
export default ProductUncheckedCreateWithoutVendorInputSchema;
