import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CustomerSubscriptionSelectObjectSchema as CustomerSubscriptionSelectObjectSchema } from './objects/CustomerSubscriptionSelect.schema';
import { CustomerSubscriptionUpdateManyMutationInputObjectSchema as CustomerSubscriptionUpdateManyMutationInputObjectSchema } from './objects/CustomerSubscriptionUpdateManyMutationInput.schema';
import { CustomerSubscriptionWhereInputObjectSchema as CustomerSubscriptionWhereInputObjectSchema } from './objects/CustomerSubscriptionWhereInput.schema';

export const CustomerSubscriptionUpdateManyAndReturnSchema: z.ZodType<Prisma.CustomerSubscriptionUpdateManyAndReturnArgs> = z.object({ select: CustomerSubscriptionSelectObjectSchema.optional(), data: CustomerSubscriptionUpdateManyMutationInputObjectSchema, where: CustomerSubscriptionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CustomerSubscriptionUpdateManyAndReturnArgs>;

export const CustomerSubscriptionUpdateManyAndReturnZodSchema = z.object({ select: CustomerSubscriptionSelectObjectSchema.optional(), data: CustomerSubscriptionUpdateManyMutationInputObjectSchema, where: CustomerSubscriptionWhereInputObjectSchema.optional() }).strict();