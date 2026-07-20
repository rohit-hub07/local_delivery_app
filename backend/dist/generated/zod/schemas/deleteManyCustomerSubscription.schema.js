import * as z from 'zod';
import { CustomerSubscriptionWhereInputObjectSchema as CustomerSubscriptionWhereInputObjectSchema } from './objects/CustomerSubscriptionWhereInput.schema';
export const CustomerSubscriptionDeleteManySchema = z.object({ where: CustomerSubscriptionWhereInputObjectSchema.optional() }).strict();
export const CustomerSubscriptionDeleteManyZodSchema = z.object({ where: CustomerSubscriptionWhereInputObjectSchema.optional() }).strict();
