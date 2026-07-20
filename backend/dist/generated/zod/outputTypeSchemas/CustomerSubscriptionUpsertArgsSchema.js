import { z } from 'zod';
import { CustomerSubscriptionIncludeSchema } from '../inputTypeSchemas/CustomerSubscriptionIncludeSchema';
import { CustomerSubscriptionWhereUniqueInputSchema } from '../inputTypeSchemas/CustomerSubscriptionWhereUniqueInputSchema';
import { CustomerSubscriptionCreateInputSchema } from '../inputTypeSchemas/CustomerSubscriptionCreateInputSchema';
import { CustomerSubscriptionUncheckedCreateInputSchema } from '../inputTypeSchemas/CustomerSubscriptionUncheckedCreateInputSchema';
import { CustomerSubscriptionUpdateInputSchema } from '../inputTypeSchemas/CustomerSubscriptionUpdateInputSchema';
import { CustomerSubscriptionUncheckedUpdateInputSchema } from '../inputTypeSchemas/CustomerSubscriptionUncheckedUpdateInputSchema';
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
export const CustomerSubscriptionUpsertArgsSchema = z.object({
    select: CustomerSubscriptionSelectSchema.optional(),
    include: z.lazy(() => CustomerSubscriptionIncludeSchema).optional(),
    where: CustomerSubscriptionWhereUniqueInputSchema,
    create: z.union([CustomerSubscriptionCreateInputSchema, CustomerSubscriptionUncheckedCreateInputSchema]),
    update: z.union([CustomerSubscriptionUpdateInputSchema, CustomerSubscriptionUncheckedUpdateInputSchema]),
}).strict();
export default CustomerSubscriptionUpsertArgsSchema;
