import * as z from 'zod';
import { CustomerSubscriptionSelectObjectSchema as CustomerSubscriptionSelectObjectSchema } from './objects/CustomerSubscriptionSelect.schema';
import { CustomerSubscriptionIncludeObjectSchema as CustomerSubscriptionIncludeObjectSchema } from './objects/CustomerSubscriptionInclude.schema';
import { CustomerSubscriptionCreateInputObjectSchema as CustomerSubscriptionCreateInputObjectSchema } from './objects/CustomerSubscriptionCreateInput.schema';
import { CustomerSubscriptionUncheckedCreateInputObjectSchema as CustomerSubscriptionUncheckedCreateInputObjectSchema } from './objects/CustomerSubscriptionUncheckedCreateInput.schema';
export const CustomerSubscriptionCreateOneSchema = z.object({ select: CustomerSubscriptionSelectObjectSchema.optional(), include: CustomerSubscriptionIncludeObjectSchema.optional(), data: z.union([CustomerSubscriptionCreateInputObjectSchema, CustomerSubscriptionUncheckedCreateInputObjectSchema]) }).strict();
export const CustomerSubscriptionCreateOneZodSchema = z.object({ select: CustomerSubscriptionSelectObjectSchema.optional(), include: CustomerSubscriptionIncludeObjectSchema.optional(), data: z.union([CustomerSubscriptionCreateInputObjectSchema, CustomerSubscriptionUncheckedCreateInputObjectSchema]) }).strict();
