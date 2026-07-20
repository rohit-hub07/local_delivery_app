import { z } from 'zod';
import { RequestsIncludeSchema } from '../inputTypeSchemas/RequestsIncludeSchema';
import { RequestsWhereInputSchema } from '../inputTypeSchemas/RequestsWhereInputSchema';
import { RequestsOrderByWithRelationInputSchema } from '../inputTypeSchemas/RequestsOrderByWithRelationInputSchema';
import { RequestsWhereUniqueInputSchema } from '../inputTypeSchemas/RequestsWhereUniqueInputSchema';
import { RequestsScalarFieldEnumSchema } from '../inputTypeSchemas/RequestsScalarFieldEnumSchema';
import { VendorCustomersArgsSchema } from "../outputTypeSchemas/VendorCustomersArgsSchema";
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const RequestsSelectSchema = z.object({
    id: z.boolean().optional(),
    vendorCustomerId: z.boolean().optional(),
    productId: z.boolean().optional(),
    type: z.boolean().optional(),
    message: z.boolean().optional(),
    start_date: z.boolean().optional(),
    end_date: z.boolean().optional(),
    status: z.boolean().optional(),
    respondedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    vendorCustomers: z.union([z.boolean(), z.lazy(() => VendorCustomersArgsSchema)]).optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsSchema)]).optional(),
}).strict();
export const RequestsFindFirstOrThrowArgsSchema = z.object({
    select: RequestsSelectSchema.optional(),
    include: z.lazy(() => RequestsIncludeSchema).optional(),
    where: RequestsWhereInputSchema.optional(),
    orderBy: z.union([RequestsOrderByWithRelationInputSchema.array(), RequestsOrderByWithRelationInputSchema]).optional(),
    cursor: RequestsWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([RequestsScalarFieldEnumSchema, RequestsScalarFieldEnumSchema.array()]).optional(),
}).strict();
export default RequestsFindFirstOrThrowArgsSchema;
