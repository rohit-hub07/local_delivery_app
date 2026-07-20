import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CustomerSubscriptionSelectObjectSchema as CustomerSubscriptionSelectObjectSchema } from './objects/CustomerSubscriptionSelect.schema';
import { CustomerSubscriptionCreateManyInputObjectSchema as CustomerSubscriptionCreateManyInputObjectSchema } from './objects/CustomerSubscriptionCreateManyInput.schema';

export const CustomerSubscriptionCreateManyAndReturnSchema: z.ZodType<Prisma.CustomerSubscriptionCreateManyAndReturnArgs> = z.object({ select: CustomerSubscriptionSelectObjectSchema.optional(), data: z.union([ CustomerSubscriptionCreateManyInputObjectSchema, z.array(CustomerSubscriptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CustomerSubscriptionCreateManyAndReturnArgs>;

export const CustomerSubscriptionCreateManyAndReturnZodSchema = z.object({ select: CustomerSubscriptionSelectObjectSchema.optional(), data: z.union([ CustomerSubscriptionCreateManyInputObjectSchema, z.array(CustomerSubscriptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();