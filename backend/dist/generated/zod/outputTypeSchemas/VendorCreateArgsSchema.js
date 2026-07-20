import { z } from 'zod';
import { VendorIncludeSchema } from '../inputTypeSchemas/VendorIncludeSchema';
import { VendorCreateInputSchema } from '../inputTypeSchemas/VendorCreateInputSchema';
import { VendorUncheckedCreateInputSchema } from '../inputTypeSchemas/VendorUncheckedCreateInputSchema';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema";
import { ProductFindManyArgsSchema } from "../outputTypeSchemas/ProductFindManyArgsSchema";
import { VendorCustomersFindManyArgsSchema } from "../outputTypeSchemas/VendorCustomersFindManyArgsSchema";
import { VendorCountOutputTypeArgsSchema } from "../outputTypeSchemas/VendorCountOutputTypeArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const VendorSelectSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    businessName: z.boolean().optional(),
    businessPhone: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductFindManyArgsSchema)]).optional(),
    vendorcustomers: z.union([z.boolean(), z.lazy(() => VendorCustomersFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => VendorCountOutputTypeArgsSchema)]).optional(),
}).strict();
export const VendorCreateArgsSchema = z.object({
    select: VendorSelectSchema.optional(),
    include: z.lazy(() => VendorIncludeSchema).optional(),
    data: z.union([VendorCreateInputSchema, VendorUncheckedCreateInputSchema]),
}).strict();
export default VendorCreateArgsSchema;
