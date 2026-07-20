import * as z from 'zod';
import { VendorCustomersCreateNestedOneWithoutSubscriptionInputObjectSchema as VendorCustomersCreateNestedOneWithoutSubscriptionInputObjectSchema } from './VendorCustomersCreateNestedOneWithoutSubscriptionInput.schema';
import { ProductCreateNestedOneWithoutSubscriptionInputObjectSchema as ProductCreateNestedOneWithoutSubscriptionInputObjectSchema } from './ProductCreateNestedOneWithoutSubscriptionInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    vendorCustomers: z.lazy(() => VendorCustomersCreateNestedOneWithoutSubscriptionInputObjectSchema),
    product: z.lazy(() => ProductCreateNestedOneWithoutSubscriptionInputObjectSchema)
}).strict();
export const CustomerSubscriptionCreateInputObjectSchema = makeSchema();
export const CustomerSubscriptionCreateInputObjectZodSchema = makeSchema();
