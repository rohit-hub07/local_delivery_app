import * as z from 'zod';
import { VendorCustomersArgsObjectSchema as VendorCustomersArgsObjectSchema } from './VendorCustomersArgs.schema';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema';
const makeSchema = () => z.object({
    vendorCustomers: z.union([z.boolean(), z.lazy(() => VendorCustomersArgsObjectSchema)]).optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const CustomerSubscriptionIncludeObjectSchema = makeSchema();
export const CustomerSubscriptionIncludeObjectZodSchema = makeSchema();
