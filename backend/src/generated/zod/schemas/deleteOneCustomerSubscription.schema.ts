import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CustomerSubscriptionSelectObjectSchema as CustomerSubscriptionSelectObjectSchema } from './objects/CustomerSubscriptionSelect.schema';
import { CustomerSubscriptionIncludeObjectSchema as CustomerSubscriptionIncludeObjectSchema } from './objects/CustomerSubscriptionInclude.schema';
import { CustomerSubscriptionWhereUniqueInputObjectSchema as CustomerSubscriptionWhereUniqueInputObjectSchema } from './objects/CustomerSubscriptionWhereUniqueInput.schema';

export const CustomerSubscriptionDeleteOneSchema: z.ZodType<Prisma.CustomerSubscriptionDeleteArgs> = z.object({ select: CustomerSubscriptionSelectObjectSchema.optional(), include: CustomerSubscriptionIncludeObjectSchema.optional(), where: CustomerSubscriptionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CustomerSubscriptionDeleteArgs>;

export const CustomerSubscriptionDeleteOneZodSchema = z.object({ select: CustomerSubscriptionSelectObjectSchema.optional(), include: CustomerSubscriptionIncludeObjectSchema.optional(), where: CustomerSubscriptionWhereUniqueInputObjectSchema }).strict();