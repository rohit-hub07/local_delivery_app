import * as z from 'zod';
import { VendorCustomersCountOutputTypeSelectObjectSchema as VendorCustomersCountOutputTypeSelectObjectSchema } from './VendorCustomersCountOutputTypeSelect.schema';
const makeSchema = () => z.object({
    select: z.lazy(() => VendorCustomersCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const VendorCustomersCountOutputTypeArgsObjectSchema = makeSchema();
export const VendorCustomersCountOutputTypeArgsObjectZodSchema = makeSchema();
