import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CustomerSubscriptionSelectObjectSchema as CustomerSubscriptionSelectObjectSchema } from './objects/CustomerSubscriptionSelect.schema';
import { CustomerSubscriptionIncludeObjectSchema as CustomerSubscriptionIncludeObjectSchema } from './objects/CustomerSubscriptionInclude.schema';
import { CustomerSubscriptionUpdateInputObjectSchema as CustomerSubscriptionUpdateInputObjectSchema } from './objects/CustomerSubscriptionUpdateInput.schema';
import { CustomerSubscriptionUncheckedUpdateInputObjectSchema as CustomerSubscriptionUncheckedUpdateInputObjectSchema } from './objects/CustomerSubscriptionUncheckedUpdateInput.schema';
import { CustomerSubscriptionWhereUniqueInputObjectSchema as CustomerSubscriptionWhereUniqueInputObjectSchema } from './objects/CustomerSubscriptionWhereUniqueInput.schema';

export const CustomerSubscriptionUpdateOneSchema: z.ZodType<Prisma.CustomerSubscriptionUpdateArgs> = z.object({ select: CustomerSubscriptionSelectObjectSchema.optional(), include: CustomerSubscriptionIncludeObjectSchema.optional(), data: z.union([CustomerSubscriptionUpdateInputObjectSchema, CustomerSubscriptionUncheckedUpdateInputObjectSchema]), where: CustomerSubscriptionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CustomerSubscriptionUpdateArgs>;

export const CustomerSubscriptionUpdateOneZodSchema = z.object({ select: CustomerSubscriptionSelectObjectSchema.optional(), include: CustomerSubscriptionIncludeObjectSchema.optional(), data: z.union([CustomerSubscriptionUpdateInputObjectSchema, CustomerSubscriptionUncheckedUpdateInputObjectSchema]), where: CustomerSubscriptionWhereUniqueInputObjectSchema }).strict();