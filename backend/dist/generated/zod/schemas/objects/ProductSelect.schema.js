import * as z from 'zod';
import { VendorArgsObjectSchema as VendorArgsObjectSchema } from './VendorArgs.schema';
import { CustomerSubscriptionFindManySchema as CustomerSubscriptionFindManySchema } from '../findManyCustomerSubscription.schema';
import { RequestsFindManySchema as RequestsFindManySchema } from '../findManyRequests.schema';
import { ProductCountOutputTypeArgsObjectSchema as ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema';
const makeSchema = () => z.object({
    id: z.boolean().optional(),
    vendorId: z.boolean().optional(),
    productName: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    vendor: z.union([z.boolean(), z.lazy(() => VendorArgsObjectSchema)]).optional(),
    subscription: z.union([z.boolean(), z.lazy(() => CustomerSubscriptionFindManySchema)]).optional(),
    request: z.union([z.boolean(), z.lazy(() => RequestsFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProductSelectObjectSchema = makeSchema();
export const ProductSelectObjectZodSchema = makeSchema();
