import { z } from 'zod';
import { VendorCustomersArgsSchema } from "../outputTypeSchemas/VendorCustomersArgsSchema";
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema";
export const CustomerSubscriptionIncludeSchema = z.object({
    vendorCustomers: z.union([z.boolean(), z.lazy(() => VendorCustomersArgsSchema)]).optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsSchema)]).optional(),
}).strict();
export default CustomerSubscriptionIncludeSchema;
