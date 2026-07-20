import { z } from 'zod';
import { VendorCustomersIncludeSchema } from '../inputTypeSchemas/VendorCustomersIncludeSchema';
import { VendorCustomersCreateInputSchema } from '../inputTypeSchemas/VendorCustomersCreateInputSchema';
import { VendorCustomersUncheckedCreateInputSchema } from '../inputTypeSchemas/VendorCustomersUncheckedCreateInputSchema';
import { VendorArgsSchema } from "../outputTypeSchemas/VendorArgsSchema";
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema";
import { CustomerSubscriptionFindManyArgsSchema } from "../outputTypeSchemas/CustomerSubscriptionFindManyArgsSchema";
import { RequestsFindManyArgsSchema } from "../outputTypeSchemas/RequestsFindManyArgsSchema";
import { VendorCustomersCountOutputTypeArgsSchema } from "../outputTypeSchemas/VendorCustomersCountOutputTypeArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
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
export const VendorCustomersCreateArgsSchema = z.object({
    select: VendorCustomersSelectSchema.optional(),
    include: z.lazy(() => VendorCustomersIncludeSchema).optional(),
    data: z.union([VendorCustomersCreateInputSchema, VendorCustomersUncheckedCreateInputSchema]),
}).strict();
export default VendorCustomersCreateArgsSchema;
