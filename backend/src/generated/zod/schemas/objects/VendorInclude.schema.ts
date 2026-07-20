import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ProductFindManySchema as ProductFindManySchema } from '../findManyProduct.schema';
import { VendorCustomersFindManySchema as VendorCustomersFindManySchema } from '../findManyVendorCustomers.schema';
import { VendorCountOutputTypeArgsObjectSchema as VendorCountOutputTypeArgsObjectSchema } from './VendorCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductFindManySchema)]).optional(),
  vendorcustomers: z.union([z.boolean(), z.lazy(() => VendorCustomersFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => VendorCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const VendorIncludeObjectSchema: z.ZodType<Prisma.VendorInclude> = makeSchema() as unknown as z.ZodType<Prisma.VendorInclude>;
export const VendorIncludeObjectZodSchema = makeSchema();
