import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { CustomerSubscriptionSelectSchema } from '../inputTypeSchemas/CustomerSubscriptionSelectSchema';
import { CustomerSubscriptionIncludeSchema } from '../inputTypeSchemas/CustomerSubscriptionIncludeSchema';

export const CustomerSubscriptionArgsSchema: z.ZodType<Prisma.CustomerSubscriptionDefaultArgs> = z.object({
  select: z.lazy(() => CustomerSubscriptionSelectSchema).optional(),
  include: z.lazy(() => CustomerSubscriptionIncludeSchema).optional(),
}).strict();

export default CustomerSubscriptionArgsSchema;
