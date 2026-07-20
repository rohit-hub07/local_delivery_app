import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CustomerSubscriptionSelectObjectSchema as CustomerSubscriptionSelectObjectSchema } from './objects/CustomerSubscriptionSelect.schema';
import { CustomerSubscriptionIncludeObjectSchema as CustomerSubscriptionIncludeObjectSchema } from './objects/CustomerSubscriptionInclude.schema';
import { CustomerSubscriptionWhereUniqueInputObjectSchema as CustomerSubscriptionWhereUniqueInputObjectSchema } from './objects/CustomerSubscriptionWhereUniqueInput.schema';

export const CustomerSubscriptionFindUniqueOrThrowSchema: z.ZodType<Prisma.CustomerSubscriptionFindUniqueOrThrowArgs> = z.object({ select: CustomerSubscriptionSelectObjectSchema.optional(), include: CustomerSubscriptionIncludeObjectSchema.optional(), where: CustomerSubscriptionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CustomerSubscriptionFindUniqueOrThrowArgs>;

export const CustomerSubscriptionFindUniqueOrThrowZodSchema = z.object({ select: CustomerSubscriptionSelectObjectSchema.optional(), include: CustomerSubscriptionIncludeObjectSchema.optional(), where: CustomerSubscriptionWhereUniqueInputObjectSchema }).strict();