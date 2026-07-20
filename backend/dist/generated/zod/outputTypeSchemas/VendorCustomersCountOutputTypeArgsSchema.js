import { z } from 'zod';
import { VendorCustomersCountOutputTypeSelectSchema } from './VendorCustomersCountOutputTypeSelectSchema';
export const VendorCustomersCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => VendorCustomersCountOutputTypeSelectSchema).nullish(),
}).strict();
export default VendorCustomersCountOutputTypeSelectSchema;
