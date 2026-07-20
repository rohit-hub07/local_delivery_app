import * as z from 'zod';
import { CustomerSubscriptionSelectObjectSchema as CustomerSubscriptionSelectObjectSchema } from './objects/CustomerSubscriptionSelect.schema';
import { CustomerSubscriptionCreateManyInputObjectSchema as CustomerSubscriptionCreateManyInputObjectSchema } from './objects/CustomerSubscriptionCreateManyInput.schema';
export const CustomerSubscriptionCreateManyAndReturnSchema = z.object({ select: CustomerSubscriptionSelectObjectSchema.optional(), data: z.union([CustomerSubscriptionCreateManyInputObjectSchema, z.array(CustomerSubscriptionCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const CustomerSubscriptionCreateManyAndReturnZodSchema = z.object({ select: CustomerSubscriptionSelectObjectSchema.optional(), data: z.union([CustomerSubscriptionCreateManyInputObjectSchema, z.array(CustomerSubscriptionCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
