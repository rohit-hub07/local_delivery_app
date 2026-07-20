import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CustomerSubscriptionWhereInputObjectSchema as CustomerSubscriptionWhereInputObjectSchema } from './objects/CustomerSubscriptionWhereInput.schema';

export const CustomerSubscriptionDeleteManySchema: z.ZodType<Prisma.CustomerSubscriptionDeleteManyArgs> = z.object({ where: CustomerSubscriptionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CustomerSubscriptionDeleteManyArgs>;

export const CustomerSubscriptionDeleteManyZodSchema = z.object({ where: CustomerSubscriptionWhereInputObjectSchema.optional() }).strict();