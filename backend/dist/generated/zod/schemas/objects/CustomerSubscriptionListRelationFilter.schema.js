import * as z from 'zod';
import { CustomerSubscriptionWhereInputObjectSchema as CustomerSubscriptionWhereInputObjectSchema } from './CustomerSubscriptionWhereInput.schema';
const makeSchema = () => z.object({
    every: z.lazy(() => CustomerSubscriptionWhereInputObjectSchema).optional(),
    some: z.lazy(() => CustomerSubscriptionWhereInputObjectSchema).optional(),
    none: z.lazy(() => CustomerSubscriptionWhereInputObjectSchema).optional()
}).strict();
export const CustomerSubscriptionListRelationFilterObjectSchema = makeSchema();
export const CustomerSubscriptionListRelationFilterObjectZodSchema = makeSchema();
