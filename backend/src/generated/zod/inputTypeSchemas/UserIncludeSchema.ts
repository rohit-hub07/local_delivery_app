import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { VendorArgsSchema } from "../outputTypeSchemas/VendorArgsSchema"
import { VendorCustomersFindManyArgsSchema } from "../outputTypeSchemas/VendorCustomersFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  vendor: z.union([z.boolean(),z.lazy(() => VendorArgsSchema)]).optional(),
  vendorcustomers: z.union([z.boolean(),z.lazy(() => VendorCustomersFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default UserIncludeSchema;
