import * as z from 'zod';
import { ProductCountOutputTypeCountSubscriptionArgsObjectSchema as ProductCountOutputTypeCountSubscriptionArgsObjectSchema } from './ProductCountOutputTypeCountSubscriptionArgs.schema';
import { ProductCountOutputTypeCountRequestArgsObjectSchema as ProductCountOutputTypeCountRequestArgsObjectSchema } from './ProductCountOutputTypeCountRequestArgs.schema';
const makeSchema = () => z.object({
    subscription: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeCountSubscriptionArgsObjectSchema)]).optional(),
    request: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeCountRequestArgsObjectSchema)]).optional()
}).strict();
export const ProductCountOutputTypeSelectObjectSchema = makeSchema();
export const ProductCountOutputTypeSelectObjectZodSchema = makeSchema();
