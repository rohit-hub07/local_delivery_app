import * as z from 'zod';
import { CustomerSubscriptionUpdateManyMutationInputObjectSchema as CustomerSubscriptionUpdateManyMutationInputObjectSchema } from './objects/CustomerSubscriptionUpdateManyMutationInput.schema';
import { CustomerSubscriptionWhereInputObjectSchema as CustomerSubscriptionWhereInputObjectSchema } from './objects/CustomerSubscriptionWhereInput.schema';
export const CustomerSubscriptionUpdateManySchema = z.object({ data: CustomerSubscriptionUpdateManyMutationInputObjectSchema, where: CustomerSubscriptionWhereInputObjectSchema.optional() }).strict();
export const CustomerSubscriptionUpdateManyZodSchema = z.object({ data: CustomerSubscriptionUpdateManyMutationInputObjectSchema, where: CustomerSubscriptionWhereInputObjectSchema.optional() }).strict();
