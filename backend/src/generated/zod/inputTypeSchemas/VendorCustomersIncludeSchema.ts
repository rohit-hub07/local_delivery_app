import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { VendorArgsSchema } from "../outputTypeSchemas/VendorArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { CustomerSubscriptionFindManyArgsSchema } from "../outputTypeSchemas/CustomerSubscriptionFindManyArgsSchema"
import { RequestsFindManyArgsSchema } from "../outputTypeSchemas/RequestsFindManyArgsSchema"
import { VendorCustomersCountOutputTypeArgsSchema } from "../outputTypeSchemas/VendorCustomersCountOutputTypeArgsSchema"

export const VendorCustomersIncludeSchema: z.ZodType<Prisma.VendorCustomersInclude> = z.object({
  vendor: z.union([z.boolean(),z.lazy(() => VendorArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  subscription: z.union([z.boolean(),z.lazy(() => CustomerSubscriptionFindManyArgsSchema)]).optional(),
  request: z.union([z.boolean(),z.lazy(() => RequestsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => VendorCustomersCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default VendorCustomersIncludeSchema;
