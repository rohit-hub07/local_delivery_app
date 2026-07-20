import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerSubscriptionSelectObjectSchema as CustomerSubscriptionSelectObjectSchema } from './CustomerSubscriptionSelect.schema';
import { CustomerSubscriptionIncludeObjectSchema as CustomerSubscriptionIncludeObjectSchema } from './CustomerSubscriptionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CustomerSubscriptionSelectObjectSchema).optional(),
  include: z.lazy(() => CustomerSubscriptionIncludeObjectSchema).optional()
}).strict();
export const CustomerSubscriptionArgsObjectSchema = makeSchema();
export const CustomerSubscriptionArgsObjectZodSchema = makeSchema();
