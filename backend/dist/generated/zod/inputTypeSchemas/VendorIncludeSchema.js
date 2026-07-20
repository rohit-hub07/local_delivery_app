import { z } from 'zod';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema";
import { ProductFindManyArgsSchema } from "../outputTypeSchemas/ProductFindManyArgsSchema";
import { VendorCustomersFindManyArgsSchema } from "../outputTypeSchemas/VendorCustomersFindManyArgsSchema";
import { VendorCountOutputTypeArgsSchema } from "../outputTypeSchemas/VendorCountOutputTypeArgsSchema";
export const VendorIncludeSchema = z.object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductFindManyArgsSchema)]).optional(),
    vendorcustomers: z.union([z.boolean(), z.lazy(() => VendorCustomersFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => VendorCountOutputTypeArgsSchema)]).optional(),
}).strict();
export default VendorIncludeSchema;
