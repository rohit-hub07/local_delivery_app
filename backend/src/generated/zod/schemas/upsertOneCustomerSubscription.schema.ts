import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CustomerSubscriptionSelectObjectSchema as CustomerSubscriptionSelectObjectSchema } from './objects/CustomerSubscriptionSelect.schema';
import { CustomerSubscriptionIncludeObjectSchema as CustomerSubscriptionIncludeObjectSchema } from './objects/CustomerSubscriptionInclude.schema';
import { CustomerSubscriptionWhereUniqueInputObjectSchema as CustomerSubscriptionWhereUniqueInputObjectSchema } from './objects/CustomerSubscriptionWhereUniqueInput.schema';
import { CustomerSubscriptionCreateInputObjectSchema as CustomerSubscriptionCreateInputObjectSchema } from './objects/CustomerSubscriptionCreateInput.schema';
import { CustomerSubscriptionUncheckedCreateInputObjectSchema as CustomerSubscriptionUncheckedCreateInputObjectSchema } from './objects/CustomerSubscriptionUncheckedCreateInput.schema';
import { CustomerSubscriptionUpdateInputObjectSchema as CustomerSubscriptionUpdateInputObjectSchema } from './objects/CustomerSubscriptionUpdateInput.schema';
import { CustomerSubscriptionUncheckedUpdateInputObjectSchema as CustomerSubscriptionUncheckedUpdateInputObjectSchema } from './objects/CustomerSubscriptionUncheckedUpdateInput.schema';

export const CustomerSubscriptionUpsertOneSchema: z.ZodType<Prisma.CustomerSubscriptionUpsertArgs> = z.object({ select: CustomerSubscriptionSelectObjectSchema.optional(), include: CustomerSubscriptionIncludeObjectSchema.optional(), where: CustomerSubscriptionWhereUniqueInputObjectSchema, create: z.union([ CustomerSubscriptionCreateInputObjectSchema, CustomerSubscriptionUncheckedCreateInputObjectSchema ]), update: z.union([ CustomerSubscriptionUpdateInputObjectSchema, CustomerSubscriptionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CustomerSubscriptionUpsertArgs>;

export const CustomerSubscriptionUpsertOneZodSchema = z.object({ select: CustomerSubscriptionSelectObjectSchema.optional(), include: CustomerSubscriptionIncludeObjectSchema.optional(), where: CustomerSubscriptionWhereUniqueInputObjectSchema, create: z.union([ CustomerSubscriptionCreateInputObjectSchema, CustomerSubscriptionUncheckedCreateInputObjectSchema ]), update: z.union([ CustomerSubscriptionUpdateInputObjectSchema, CustomerSubscriptionUncheckedUpdateInputObjectSchema ]) }).strict();