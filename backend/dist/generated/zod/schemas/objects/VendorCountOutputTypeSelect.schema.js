import * as z from 'zod';
import { VendorCountOutputTypeCountProductArgsObjectSchema as VendorCountOutputTypeCountProductArgsObjectSchema } from './VendorCountOutputTypeCountProductArgs.schema';
import { VendorCountOutputTypeCountVendorcustomersArgsObjectSchema as VendorCountOutputTypeCountVendorcustomersArgsObjectSchema } from './VendorCountOutputTypeCountVendorcustomersArgs.schema';
const makeSchema = () => z.object({
    product: z.union([z.boolean(), z.lazy(() => VendorCountOutputTypeCountProductArgsObjectSchema)]).optional(),
    vendorcustomers: z.union([z.boolean(), z.lazy(() => VendorCountOutputTypeCountVendorcustomersArgsObjectSchema)]).optional()
}).strict();
export const VendorCountOutputTypeSelectObjectSchema = makeSchema();
export const VendorCountOutputTypeSelectObjectZodSchema = makeSchema();
