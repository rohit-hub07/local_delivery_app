import * as z from 'zod';
import { VendorCustomersWhereInputObjectSchema as VendorCustomersWhereInputObjectSchema } from './VendorCustomersWhereInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => VendorCustomersWhereInputObjectSchema).optional()
}).strict();
export const VendorCountOutputTypeCountVendorcustomersArgsObjectSchema = makeSchema();
export const VendorCountOutputTypeCountVendorcustomersArgsObjectZodSchema = makeSchema();
