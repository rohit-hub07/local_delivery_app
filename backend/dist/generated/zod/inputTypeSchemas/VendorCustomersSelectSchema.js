import { z } from 'zod';
import { VendorArgsSchema } from "../outputTypeSchemas/VendorArgsSchema";
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema";
import { CustomerSubscriptionFindManyArgsSchema } from "../outputTypeSchemas/CustomerSubscriptionFindManyArgsSchema";
import { RequestsFindManyArgsSchema } from "../outputTypeSchemas/RequestsFindManyArgsSchema";
import { VendorCustomersCountOutputTypeArgsSchema } from "../outputTypeSchemas/VendorCustomersCountOutputTypeArgsSchema";
export const VendorCustomersSelectSchema = z.object({
    id: z.boolean().optional(),
    vendorId: z.boolean().optional(),
    customerId: z.boolean().optional(),
    customerPhone: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    vendor: z.union([z.boolean(), z.lazy(() => VendorArgsSchema)]).optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    subscription: z.union([z.boolean(), z.lazy(() => CustomerSubscriptionFindManyArgsSchema)]).optional(),
    request: z.union([z.boolean(), z.lazy(() => RequestsFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => VendorCustomersCountOutputTypeArgsSchema)]).optional(),
}).strict();
export default VendorCustomersSelectSchema;
