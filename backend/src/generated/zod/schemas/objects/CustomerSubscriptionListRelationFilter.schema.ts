import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerSubscriptionWhereInputObjectSchema as CustomerSubscriptionWhereInputObjectSchema } from './CustomerSubscriptionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CustomerSubscriptionWhereInputObjectSchema).optional(),
  some: z.lazy(() => CustomerSubscriptionWhereInputObjectSchema).optional(),
  none: z.lazy(() => CustomerSubscriptionWhereInputObjectSchema).optional()
}).strict();
export const CustomerSubscriptionListRelationFilterObjectSchema: z.ZodType<Prisma.CustomerSubscriptionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionListRelationFilter>;
export const CustomerSubscriptionListRelationFilterObjectZodSchema = makeSchema();
