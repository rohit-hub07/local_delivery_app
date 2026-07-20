import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CustomerSubscriptionUpdateManyMutationInputObjectSchema as CustomerSubscriptionUpdateManyMutationInputObjectSchema } from './objects/CustomerSubscriptionUpdateManyMutationInput.schema';
import { CustomerSubscriptionWhereInputObjectSchema as CustomerSubscriptionWhereInputObjectSchema } from './objects/CustomerSubscriptionWhereInput.schema';

export const CustomerSubscriptionUpdateManySchema: z.ZodType<Prisma.CustomerSubscriptionUpdateManyArgs> = z.object({ data: CustomerSubscriptionUpdateManyMutationInputObjectSchema, where: CustomerSubscriptionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CustomerSubscriptionUpdateManyArgs>;

export const CustomerSubscriptionUpdateManyZodSchema = z.object({ data: CustomerSubscriptionUpdateManyMutationInputObjectSchema, where: CustomerSubscriptionWhereInputObjectSchema.optional() }).strict();