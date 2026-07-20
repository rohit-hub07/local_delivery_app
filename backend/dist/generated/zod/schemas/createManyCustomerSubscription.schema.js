import * as z from 'zod';
import { CustomerSubscriptionCreateManyInputObjectSchema as CustomerSubscriptionCreateManyInputObjectSchema } from './objects/CustomerSubscriptionCreateManyInput.schema';
export const CustomerSubscriptionCreateManySchema = z.object({ data: z.union([CustomerSubscriptionCreateManyInputObjectSchema, z.array(CustomerSubscriptionCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const CustomerSubscriptionCreateManyZodSchema = z.object({ data: z.union([CustomerSubscriptionCreateManyInputObjectSchema, z.array(CustomerSubscriptionCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
