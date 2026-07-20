import * as z from 'zod';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ProductFindManySchema as ProductFindManySchema } from '../findManyProduct.schema';
import { VendorCustomersFindManySchema as VendorCustomersFindManySchema } from '../findManyVendorCustomers.schema';
import { VendorCountOutputTypeArgsObjectSchema as VendorCountOutputTypeArgsObjectSchema } from './VendorCountOutputTypeArgs.schema';
const makeSchema = () => z.object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductFindManySchema)]).optional(),
    vendorcustomers: z.union([z.boolean(), z.lazy(() => VendorCustomersFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => VendorCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const VendorIncludeObjectSchema = makeSchema();
export const VendorIncludeObjectZodSchema = makeSchema();
