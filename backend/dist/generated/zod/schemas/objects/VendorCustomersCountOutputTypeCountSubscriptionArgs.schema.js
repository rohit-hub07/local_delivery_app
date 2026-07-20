import * as z from 'zod';
import { CustomerSubscriptionWhereInputObjectSchema as CustomerSubscriptionWhereInputObjectSchema } from './CustomerSubscriptionWhereInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => CustomerSubscriptionWhereInputObjectSchema).optional()
}).strict();
export const VendorCustomersCountOutputTypeCountSubscriptionArgsObjectSchema = makeSchema();
export const VendorCustomersCountOutputTypeCountSubscriptionArgsObjectZodSchema = makeSchema();
