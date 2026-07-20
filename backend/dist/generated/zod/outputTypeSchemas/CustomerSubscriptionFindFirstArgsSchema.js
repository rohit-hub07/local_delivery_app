import { z } from 'zod';
import { CustomerSubscriptionIncludeSchema } from '../inputTypeSchemas/CustomerSubscriptionIncludeSchema';
import { CustomerSubscriptionWhereInputSchema } from '../inputTypeSchemas/CustomerSubscriptionWhereInputSchema';
import { CustomerSubscriptionOrderByWithRelationInputSchema } from '../inputTypeSchemas/CustomerSubscriptionOrderByWithRelationInputSchema';
import { CustomerSubscriptionWhereUniqueInputSchema } from '../inputTypeSchemas/CustomerSubscriptionWhereUniqueInputSchema';
import { CustomerSubscriptionScalarFieldEnumSchema } from '../inputTypeSchemas/CustomerSubscriptionScalarFieldEnumSchema';
import { VendorCustomersArgsSchema } from "../outputTypeSchemas/VendorCustomersArgsSchema";
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const CustomerSubscriptionSelectSchema = z.object({
    id: z.boolean().optional(),
    vendorCustomerId: z.boolean().optional(),
    productId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    vendorCustomers: z.union([z.boolean(), z.lazy(() => VendorCustomersArgsSchema)]).optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsSchema)]).optional(),
}).strict();
export const CustomerSubscriptionFindFirstArgsSchema = z.object({
    select: CustomerSubscriptionSelectSchema.optional(),
    include: z.lazy(() => CustomerSubscriptionIncludeSchema).optional(),
    where: CustomerSubscriptionWhereInputSchema.optional(),
    orderBy: z.union([CustomerSubscriptionOrderByWithRelationInputSchema.array(), CustomerSubscriptionOrderByWithRelationInputSchema]).optional(),
    cursor: CustomerSubscriptionWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([CustomerSubscriptionScalarFieldEnumSchema, CustomerSubscriptionScalarFieldEnumSchema.array()]).optional(),
}).strict();
export default CustomerSubscriptionFindFirstArgsSchema;
