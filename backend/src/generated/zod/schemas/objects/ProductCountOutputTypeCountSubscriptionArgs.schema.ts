import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerSubscriptionWhereInputObjectSchema as CustomerSubscriptionWhereInputObjectSchema } from './CustomerSubscriptionWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerSubscriptionWhereInputObjectSchema).optional()
}).strict();
export const ProductCountOutputTypeCountSubscriptionArgsObjectSchema = makeSchema();
export const ProductCountOutputTypeCountSubscriptionArgsObjectZodSchema = makeSchema();
