import { z } from 'zod';
import { UserIncludeSchema } from '../inputTypeSchemas/UserIncludeSchema';
import { UserWhereUniqueInputSchema } from '../inputTypeSchemas/UserWhereUniqueInputSchema';
import { VendorArgsSchema } from "../outputTypeSchemas/VendorArgsSchema";
import { VendorCustomersFindManyArgsSchema } from "../outputTypeSchemas/VendorCustomersFindManyArgsSchema";
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const UserSelectSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    phone: z.boolean().optional(),
    address: z.boolean().optional(),
    role: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    vendor: z.union([z.boolean(), z.lazy(() => VendorArgsSchema)]).optional(),
    vendorcustomers: z.union([z.boolean(), z.lazy(() => VendorCustomersFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict();
export const UserFindUniqueArgsSchema = z.object({
    select: UserSelectSchema.optional(),
    include: z.lazy(() => UserIncludeSchema).optional(),
    where: UserWhereUniqueInputSchema,
}).strict();
export default UserFindUniqueArgsSchema;
