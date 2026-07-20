import * as z from 'zod';
import { CustomerSubscriptionCreateManyProductInputObjectSchema as CustomerSubscriptionCreateManyProductInputObjectSchema } from './CustomerSubscriptionCreateManyProductInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => CustomerSubscriptionCreateManyProductInputObjectSchema), z.lazy(() => CustomerSubscriptionCreateManyProductInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const CustomerSubscriptionCreateManyProductInputEnvelopeObjectSchema = makeSchema();
export const CustomerSubscriptionCreateManyProductInputEnvelopeObjectZodSchema = makeSchema();
