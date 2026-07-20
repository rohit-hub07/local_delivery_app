import { z } from 'zod';
import { ProductIncludeSchema } from '../inputTypeSchemas/ProductIncludeSchema';
import { ProductWhereUniqueInputSchema } from '../inputTypeSchemas/ProductWhereUniqueInputSchema';
import { ProductCreateInputSchema } from '../inputTypeSchemas/ProductCreateInputSchema';
import { ProductUncheckedCreateInputSchema } from '../inputTypeSchemas/ProductUncheckedCreateInputSchema';
import { ProductUpdateInputSchema } from '../inputTypeSchemas/ProductUpdateInputSchema';
import { ProductUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProductUncheckedUpdateInputSchema';
import { VendorArgsSchema } from "../outputTypeSchemas/VendorArgsSchema";
import { CustomerSubscriptionFindManyArgsSchema } from "../outputTypeSchemas/CustomerSubscriptionFindManyArgsSchema";
import { RequestsFindManyArgsSchema } from "../outputTypeSchemas/RequestsFindManyArgsSchema";
import { ProductCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProductCountOutputTypeArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const ProductSelectSchema = z.object({
    id: z.boolean().optional(),
    vendorId: z.boolean().optional(),
    productName: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    vendor: z.union([z.boolean(), z.lazy(() => VendorArgsSchema)]).optional(),
    subscription: z.union([z.boolean(), z.lazy(() => CustomerSubscriptionFindManyArgsSchema)]).optional(),
    request: z.union([z.boolean(), z.lazy(() => RequestsFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict();
export const ProductUpsertArgsSchema = z.object({
    select: ProductSelectSchema.optional(),
    include: z.lazy(() => ProductIncludeSchema).optional(),
    where: ProductWhereUniqueInputSchema,
    create: z.union([ProductCreateInputSchema, ProductUncheckedCreateInputSchema]),
    update: z.union([ProductUpdateInputSchema, ProductUncheckedUpdateInputSchema]),
}).strict();
export default ProductUpsertArgsSchema;
