import * as z from 'zod';
import { VendorCustomersCreateNestedOneWithoutSubscriptionInputObjectSchema as VendorCustomersCreateNestedOneWithoutSubscriptionInputObjectSchema } from './VendorCustomersCreateNestedOneWithoutSubscriptionInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    vendorCustomers: z.lazy(() => VendorCustomersCreateNestedOneWithoutSubscriptionInputObjectSchema)
}).strict();
export const CustomerSubscriptionCreateWithoutProductInputObjectSchema = makeSchema();
export const CustomerSubscriptionCreateWithoutProductInputObjectZodSchema = makeSchema();
