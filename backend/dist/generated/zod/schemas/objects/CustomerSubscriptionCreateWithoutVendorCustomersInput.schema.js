import * as z from 'zod';
import { ProductCreateNestedOneWithoutSubscriptionInputObjectSchema as ProductCreateNestedOneWithoutSubscriptionInputObjectSchema } from './ProductCreateNestedOneWithoutSubscriptionInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    product: z.lazy(() => ProductCreateNestedOneWithoutSubscriptionInputObjectSchema)
}).strict();
export const CustomerSubscriptionCreateWithoutVendorCustomersInputObjectSchema = makeSchema();
export const CustomerSubscriptionCreateWithoutVendorCustomersInputObjectZodSchema = makeSchema();
