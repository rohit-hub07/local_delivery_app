import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CustomerSubscriptionCreateManyInputObjectSchema as CustomerSubscriptionCreateManyInputObjectSchema } from './objects/CustomerSubscriptionCreateManyInput.schema';

export const CustomerSubscriptionCreateManySchema: z.ZodType<Prisma.CustomerSubscriptionCreateManyArgs> = z.object({ data: z.union([ CustomerSubscriptionCreateManyInputObjectSchema, z.array(CustomerSubscriptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CustomerSubscriptionCreateManyArgs>;

export const CustomerSubscriptionCreateManyZodSchema = z.object({ data: z.union([ CustomerSubscriptionCreateManyInputObjectSchema, z.array(CustomerSubscriptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();