import * as z from 'zod';
import { CustomerSubscriptionSelectObjectSchema as CustomerSubscriptionSelectObjectSchema } from './objects/CustomerSubscriptionSelect.schema';
import { CustomerSubscriptionUpdateManyMutationInputObjectSchema as CustomerSubscriptionUpdateManyMutationInputObjectSchema } from './objects/CustomerSubscriptionUpdateManyMutationInput.schema';
import { CustomerSubscriptionWhereInputObjectSchema as CustomerSubscriptionWhereInputObjectSchema } from './objects/CustomerSubscriptionWhereInput.schema';
export const CustomerSubscriptionUpdateManyAndReturnSchema = z.object({ select: CustomerSubscriptionSelectObjectSchema.optional(), data: CustomerSubscriptionUpdateManyMutationInputObjectSchema, where: CustomerSubscriptionWhereInputObjectSchema.optional() }).strict();
export const CustomerSubscriptionUpdateManyAndReturnZodSchema = z.object({ select: CustomerSubscriptionSelectObjectSchema.optional(), data: CustomerSubscriptionUpdateManyMutationInputObjectSchema, where: CustomerSubscriptionWhereInputObjectSchema.optional() }).strict();
