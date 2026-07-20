import { z } from 'zod';
import { VendorIncludeSchema } from '../inputTypeSchemas/VendorIncludeSchema';
import { VendorWhereInputSchema } from '../inputTypeSchemas/VendorWhereInputSchema';
import { VendorOrderByWithRelationInputSchema } from '../inputTypeSchemas/VendorOrderByWithRelationInputSchema';
import { VendorWhereUniqueInputSchema } from '../inputTypeSchemas/VendorWhereUniqueInputSchema';
import { VendorScalarFieldEnumSchema } from '../inputTypeSchemas/VendorScalarFieldEnumSchema';
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
export const VendorFindFirstArgsSchema = z.object({
    select: VendorSelectSchema.optional(),
    include: z.lazy(() => VendorIncludeSchema).optional(),
    where: VendorWhereInputSchema.optional(),
    orderBy: z.union([VendorOrderByWithRelationInputSchema.array(), VendorOrderByWithRelationInputSchema]).optional(),
    cursor: VendorWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([VendorScalarFieldEnumSchema, VendorScalarFieldEnumSchema.array()]).optional(),
}).strict();
export default VendorFindFirstArgsSchema;
