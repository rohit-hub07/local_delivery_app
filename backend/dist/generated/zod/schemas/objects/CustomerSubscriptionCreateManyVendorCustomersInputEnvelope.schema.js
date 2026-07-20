import * as z from 'zod';
import { CustomerSubscriptionCreateManyVendorCustomersInputObjectSchema as CustomerSubscriptionCreateManyVendorCustomersInputObjectSchema } from './CustomerSubscriptionCreateManyVendorCustomersInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => CustomerSubscriptionCreateManyVendorCustomersInputObjectSchema), z.lazy(() => CustomerSubscriptionCreateManyVendorCustomersInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const CustomerSubscriptionCreateManyVendorCustomersInputEnvelopeObjectSchema = makeSchema();
export const CustomerSubscriptionCreateManyVendorCustomersInputEnvelopeObjectZodSchema = makeSchema();
